import {
    oathInfo,
    WPDomain,
    WPRepository,
} from '~/repositories/WP/WPRepository';
import { serializeQuery } from '~/repositories/Repository';

class WPProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getProducts(payload) { //orj
        let enpoint;
        if (payload) {
            enpoint = `wp-json/wc/v3/products?${serializeQuery({
                ...payload,
                ...oathInfo,
            })}`;
        } else {
            enpoint = 'wp-json/wc/v3/products';
        }
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    const data = {
                        items: response.data,
                        totalItems: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                    };
                    return data;
                } else return null;
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }

    /* async getProducts(payload) {
        let enpoint = 'wp-json/wc/v3/products';
        if (payload) {
            enpoint += `?${serializeQuery({
                ...payload,
                ...oathInfo,
            })}`;
        }

        console.log("ENDPOINT: ",enpoint)
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    const data = {
                        items: response.data,
                        totalItems: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                    };
                    return data;
                } else return null;
            })
            .catch(() => {
                return null;
            });
        return reponse;
    } */

    async getAttributeItems(attributeId, payload) {
        let enpoint;
        if (payload) {
            enpoint = `wp-json/wc/v3/products/attributes/${attributeId}/terms?${serializeQuery(
                {
                    ...payload,
                    ...oathInfo,
                }
            )}`;
        } else {
            enpoint = `wp-json/wc/v3/products/attributes/${attributeId}/terms`;
        }
    
        try {
            const response = await WPRepository.get(`${WPDomain}/${enpoint}`);
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async getProductCategories(payload) {
        let enpoint;
        if (payload) {
            enpoint = `wp-json/wc/v3/products/categories?${serializeQuery({
                ...payload,
                ...oathInfo,
            })}`;
        } else {
            enpoint = 'wp-json/wc/v3/products/categories';
        }
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    const data = {
                        items: response.data,
                        totalItems: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                    };
                    return data;
                } else return null;
            })
            .catch((error) => {
                console.log("eroror:::", error)
                /* ({error: JSON.stringify(error) }) */
            });
        return reponse;
    }

    async getProductByID(payload) {
        const enpoint = `wp-json/wc/v3/products/${payload}?${serializeQuery({
            ...oathInfo,
        })}`;
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error.message));
                return null;
            });
        return reponse;
    }

    async getProductVariantsByID(payload) {
        const enpoint = `wp-json/wc/v3/products/${payload}/variations?${serializeQuery(
            {
                ...oathInfo,
            }
        )}`;
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error.message));
                return null;
            });
        return reponse;
    }

    async getRelatedProductByID(payload) {
        const enpoint = `wp-json/wc/v2/products/?include=${payload}?${serializeQuery(
            {
                ...oathInfo,
            }
        )}`;
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getCategoryByID(payload) {
        const enpoint = `wp-json/wc/v3/products/categories/${payload}?${serializeQuery(
            {
                ...oathInfo,
            }
        )}`;
        const reponse = await WPRepository.get(`${WPDomain}/${enpoint}`)
            .then((response) => {
                if (response.data) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error.message));
                return null;
            });
        return reponse;
    }
}

export default new WPProductRepository();
