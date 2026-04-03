import { icons } from '@/constants/icons';
import type { IconKey } from '@/constants/icons';

describe('icons', () => {
    it('exports an icons object', () => {
        expect(icons).toBeDefined();
        expect(typeof icons).toBe('object');
    });

    it('has home icon', () => {
        expect(icons.home).toBeDefined();
    });

    it('has wallet icon', () => {
        expect(icons.wallet).toBeDefined();
    });

    it('has setting icon', () => {
        expect(icons.setting).toBeDefined();
    });

    it('has activity icon', () => {
        expect(icons.activity).toBeDefined();
    });

    it('has add icon', () => {
        expect(icons.add).toBeDefined();
    });

    it('has back icon', () => {
        expect(icons.back).toBeDefined();
    });

    it('has menu icon', () => {
        expect(icons.menu).toBeDefined();
    });

    it('has plus icon', () => {
        expect(icons.plus).toBeDefined();
    });

    it('has notion icon', () => {
        expect(icons.notion).toBeDefined();
    });

    it('has dropbox icon', () => {
        expect(icons.dropbox).toBeDefined();
    });

    it('has openai icon', () => {
        expect(icons.openai).toBeDefined();
    });

    it('has adobe icon', () => {
        expect(icons.adobe).toBeDefined();
    });

    it('has medium icon', () => {
        expect(icons.medium).toBeDefined();
    });

    it('has figma icon', () => {
        expect(icons.figma).toBeDefined();
    });

    it('has spotify icon', () => {
        expect(icons.spotify).toBeDefined();
    });

    it('has github icon', () => {
        expect(icons.github).toBeDefined();
    });

    it('has claude icon', () => {
        expect(icons.claude).toBeDefined();
    });

    it('has canva icon', () => {
        expect(icons.canva).toBeDefined();
    });

    it('exports exactly the expected set of icon keys', () => {
        const expectedKeys: IconKey[] = [
            'home', 'wallet', 'setting', 'activity', 'add', 'back',
            'menu', 'plus', 'notion', 'dropbox', 'openai', 'adobe',
            'medium', 'figma', 'spotify', 'github', 'claude', 'canva',
        ];
        expectedKeys.forEach((key) => {
            expect(icons).toHaveProperty(key);
        });
        expect(Object.keys(icons)).toHaveLength(expectedKeys.length);
    });

    it('all icon values are non-null', () => {
        Object.entries(icons).forEach(([key, value]) => {
            expect(value).not.toBeNull();
            expect(value).not.toBeUndefined();
        });
    });
});