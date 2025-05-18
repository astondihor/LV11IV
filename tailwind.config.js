import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

const getColor = (variable) => {
    return (
        'color-mix(in srgb, var(' +
        variable +
        ') calc(<alpha-value> * 100%), transparent)'
    );
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: getColor('--color-primary-500'),
                    50: getColor('--color-primary-50'),
                    100: getColor('--color-primary-100'),
                    200: getColor('--color-primary-200'),
                    300: getColor('--color-primary-300'),
                    400: getColor('--color-primary-400'),
                    500: getColor('--color-primary-500'),
                    600: getColor('--color-primary-600'),
                    700: getColor('--color-primary-700'),
                    800: getColor('--color-primary-800'),
                    900: getColor('--color-primary-900'),
                    950: getColor('--color-primary-950'),
                },
                secondary: {
                    DEFAULT: getColor('--color-secondary-500'),
                    50: getColor('--color-secondary-50'),
                    100: getColor('--color-secondary-100'),
                    200: getColor('--color-secondary-200'),
                    300: getColor('--color-secondary-300'),
                    400: getColor('--color-secondary-400'),
                    500: getColor('--color-secondary-500'),
                    600: getColor('--color-secondary-600'),
                    700: getColor('--color-secondary-700'),
                    800: getColor('--color-secondary-800'),
                    900: getColor('--color-secondary-900'),
                    950: getColor('--color-secondary-950'),
                },
                success: {
                    DEFAULT: getColor('--color-success-500'),
                    50: getColor('--color-success-50'),
                    100: getColor('--color-success-100'),
                    200: getColor('--color-success-200'),
                    300: getColor('--color-success-300'),
                    400: getColor('--color-success-400'),
                    500: getColor('--color-success-500'),
                    600: getColor('--color-success-600'),
                    700: getColor('--color-success-700'),
                    800: getColor('--color-success-800'),
                    900: getColor('--color-success-900'),
                    950: getColor('--color-success-950'),
                },
                warning: {
                    DEFAULT: getColor('--color-warning-500'),
                    50: getColor('--color-warning-50'),
                    100: getColor('--color-warning-100'),
                    200: getColor('--color-warning-200'),
                    300: getColor('--color-warning-300'),
                    400: getColor('--color-warning-400'),
                    500: getColor('--color-warning-500'),
                    600: getColor('--color-warning-600'),
                    700: getColor('--color-warning-700'),
                    800: getColor('--color-warning-800'),
                    900: getColor('--color-warning-900'),
                    950: getColor('--color-warning-950'),
                },
                info: {
                    DEFAULT: getColor('--color-info-500'),
                    50: getColor('--color-info-50'),
                    100: getColor('--color-info-100'),
                    200: getColor('--color-info-200'),
                    300: getColor('--color-info-300'),
                    400: getColor('--color-info-400'),
                    500: getColor('--color-info-500'),
                    600: getColor('--color-info-600'),
                    700: getColor('--color-info-700'),
                    800: getColor('--color-info-800'),
                    900: getColor('--color-info-900'),
                    950: getColor('--color-info-950'),
                },
                error: {
                    DEFAULT: getColor('--color-error-500'),
                    50: getColor('--color-error-50'),
                    100: getColor('--color-error-100'),
                    200: getColor('--color-error-200'),
                    300: getColor('--color-error-300'),
                    400: getColor('--color-error-400'),
                    500: getColor('--color-error-500'),
                    600: getColor('--color-error-600'),
                    700: getColor('--color-error-700'),
                    800: getColor('--color-error-800'),
                    900: getColor('--color-error-900'),
                    950: getColor('--color-error-950'),
                },
                light: {
                    DEFAULT: getColor('--color-light-500'),
                    50: getColor('--color-light-50'),
                    100: getColor('--color-light-100'),
                    200: getColor('--color-light-200'),
                    300: getColor('--color-light-300'),
                    400: getColor('--color-light-400'),
                    500: getColor('--color-light-500'),
                    600: getColor('--color-light-600'),
                    700: getColor('--color-light-700'),
                    800: getColor('--color-light-800'),
                    900: getColor('--color-light-900'),
                    950: getColor('--color-light-950'),
                },
                dark: {
                    DEFAULT: getColor('--color-dark-500'),
                    50: getColor('--color-dark-50'),
                    100: getColor('--color-dark-100'),
                    200: getColor('--color-dark-200'),
                    300: getColor('--color-dark-300'),
                    400: getColor('--color-dark-400'),
                    500: getColor('--color-dark-500'),
                    600: getColor('--color-dark-600'),
                    700: getColor('--color-dark-700'),
                    800: getColor('--color-dark-800'),
                    900: getColor('--color-dark-900'),
                    950: getColor('--color-dark-950'),
                },
            },
        },
    },

    plugins: [forms],
};
