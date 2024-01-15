export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',

    GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
    GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
    GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
    GET_PRODUCTS_BY_MATERIAL: 'GET_PRODUCTS_BY_MATERIAL',
    GET_PRODUCTS_BY_SIZE: 'GET_PRODUCTS_BY_SIZE',
    GET_PRODUCTS_BY_GENDER: 'GET_PRODUCTS_BY_GENDER',
    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',

    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',


    GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
    GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',

    GET_BRANDS: 'GET_BRANDS',
    GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',

    GET_SIZE: 'GET_SIZE',
    GET_SIZE_SUCCESS: 'GET_SIZE_SUCCESS',

    GET_GENDER: 'GET_GENDER',
    GET_GENDER_SUCCESS: 'GET_GENDER_SUCCESS',

    GET_MATERIALS: 'GET_MATERIALS',
    GET_MATERIALS_SUCCESS: 'GET_MATERIALS_SUCCESS',

    GET_SIZE: 'GET_SIZE',
    GET_SIZE_SUCCESS: 'GET_SIZE_SUCCESS',

    GET_GENDER: 'GET_GENDER',
    GET_GENDER_SUCCESS: 'GET_GENDER_SUCCESS',

    GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
    GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS',
};

export function getProducts(payload) {
    return { type: actionTypes.GET_PRODUCTS, payload };
}

export function getTotalProducts() {
    return { type: actionTypes.GET_TOTAL_OF_PRODUCTS };
}

export function getBrands() {
    return { type: actionTypes.GET_BRANDS };
}

export function getBrandsSuccess(payload) {
    return { type: actionTypes.GET_BRANDS_SUCCESS, payload };
}

export function getMaterials() {
    return { type: actionTypes.GET_MATERIALS };
}

export function getSize() {
    return { type: actionTypes.GET_SIZE };
}

export function getSizeSuccess(payload) {
    return { type: actionTypes.GET_SIZE_SUCCESS, payload };
}

export function getGender() {
    return { type: actionTypes.GET_GENDER };
}

export function getGenderSuccess(payload) {
    return { type: actionTypes.GET_GENDER_SUCCESS, payload };
}

export function getProductCategories() {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES };
}

export function getProductCategoriesSuccess(payload) {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS, payload };
}

export function getTotalProductsSuccess(payload) {
    return {
        type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
        payload,
    };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}
export function getProductByKeywordsSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
        payload,
    };
}

export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductsByCategory(category) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        category,
    };
}

export function getProductsByBrand(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_BRAND,
        payload,
    };
}

export function getProductsByMaterials(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_MATERIAL,
        payload,
    };
}

export function getProductsBySize(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_SIZE,
        payload,
    };
}

export function getProductsByGender(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_GENDER,
        payload,
    };
}

export function getProductsByKeyword(keyword) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

export function getProductsById(id) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID,
        id,
    };
}

export function getProductsByPrice(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}
