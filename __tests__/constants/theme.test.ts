import { colors, spacing, components, theme } from '@/constants/theme';

describe('colors', () => {
    it('has a background color', () => {
        expect(colors.background).toBe('#fff9e3');
    });

    it('has a foreground color', () => {
        expect(colors.foreground).toBe('#081126');
    });

    it('has a primary color matching foreground', () => {
        expect(colors.primary).toBe('#081126');
    });

    it('has an accent color', () => {
        expect(colors.accent).toBe('#ea7a53');
    });

    it('has a success color', () => {
        expect(colors.success).toBe('#16a34a');
    });

    it('has a destructive color', () => {
        expect(colors.destructive).toBe('#dc2626');
    });

    it('has a subscription color', () => {
        expect(colors.subscription).toBe('#8fd1bd');
    });

    it('has a card color', () => {
        expect(colors.card).toBe('#fff8e7');
    });

    it('has a muted color', () => {
        expect(colors.muted).toBe('#f6eecf');
    });

    it('has a mutedForeground with opacity', () => {
        expect(colors.mutedForeground).toBe('rgba(0, 0, 0, 0.6)');
    });

    it('has a border with opacity', () => {
        expect(colors.border).toBe('rgba(0, 0, 0, 0.1)');
    });

    it('exports all required color keys', () => {
        const expectedKeys = [
            'background', 'foreground', 'card', 'muted', 'mutedForeground',
            'primary', 'accent', 'border', 'success', 'destructive', 'subscription',
        ];
        expectedKeys.forEach((key) => {
            expect(colors).toHaveProperty(key);
        });
    });
});

describe('spacing', () => {
    it('has zero spacing', () => {
        expect(spacing[0]).toBe(0);
    });

    it('uses 4px base unit', () => {
        expect(spacing[1]).toBe(4);
        expect(spacing[2]).toBe(8);
        expect(spacing[3]).toBe(12);
        expect(spacing[4]).toBe(16);
        expect(spacing[5]).toBe(20);
    });

    it('has spacing[18] equal to 72', () => {
        expect(spacing[18]).toBe(72);
    });

    it('has spacing[8] equal to 32', () => {
        expect(spacing[8]).toBe(32);
    });

    it('has spacing[12] equal to 48', () => {
        expect(spacing[12]).toBe(48);
    });

    it('has spacing[30] equal to 120', () => {
        expect(spacing[30]).toBe(120);
    });

    it('all values are non-negative numbers', () => {
        Object.values(spacing).forEach((val) => {
            expect(typeof val).toBe('number');
            expect(val).toBeGreaterThanOrEqual(0);
        });
    });
});

describe('components.tabBar', () => {
    it('has height equal to spacing[18]', () => {
        expect(components.tabBar.height).toBe(spacing[18]);
        expect(components.tabBar.height).toBe(72);
    });

    it('has horizontalInset equal to spacing[5]', () => {
        expect(components.tabBar.horizontalInset).toBe(spacing[5]);
        expect(components.tabBar.horizontalInset).toBe(20);
    });

    it('has radius equal to spacing[8]', () => {
        expect(components.tabBar.radius).toBe(spacing[8]);
        expect(components.tabBar.radius).toBe(32);
    });

    it('has iconFrame equal to spacing[12]', () => {
        expect(components.tabBar.iconFrame).toBe(spacing[12]);
        expect(components.tabBar.iconFrame).toBe(48);
    });

    it('has itemPaddingVertical equal to spacing[2]', () => {
        expect(components.tabBar.itemPaddingVertical).toBe(spacing[2]);
        expect(components.tabBar.itemPaddingVertical).toBe(8);
    });

    it('has all required tabBar properties', () => {
        const expectedKeys = ['height', 'horizontalInset', 'radius', 'iconFrame', 'itemPaddingVertical'];
        expectedKeys.forEach((key) => {
            expect(components.tabBar).toHaveProperty(key);
        });
    });
});

describe('theme', () => {
    it('re-exports colors', () => {
        expect(theme.colors).toBe(colors);
    });

    it('re-exports spacing', () => {
        expect(theme.spacing).toBe(spacing);
    });

    it('re-exports components', () => {
        expect(theme.components).toBe(components);
    });

    it('has all top-level keys', () => {
        expect(theme).toHaveProperty('colors');
        expect(theme).toHaveProperty('spacing');
        expect(theme).toHaveProperty('components');
    });
});