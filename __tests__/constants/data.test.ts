import { tabs } from '@/constants/data';
import { icons } from '@/constants/icons';

describe('tabs', () => {
    it('exports an array of tabs', () => {
        expect(Array.isArray(tabs)).toBe(true);
    });

    it('has exactly 4 tabs', () => {
        expect(tabs).toHaveLength(4);
    });

    it('first tab is Home pointing to index', () => {
        expect(tabs[0].name).toBe('index');
        expect(tabs[0].title).toBe('Home');
    });

    it('second tab is Subscriptions', () => {
        expect(tabs[1].name).toBe('subscriptions');
        expect(tabs[1].title).toBe('Subscriptions');
    });

    it('third tab is Insights', () => {
        expect(tabs[2].name).toBe('insights');
        expect(tabs[2].title).toBe('Insights');
    });

    it('fourth tab is Settings', () => {
        expect(tabs[3].name).toBe('settings');
        expect(tabs[3].title).toBe('Settings');
    });

    it('each tab has name, title, and icon', () => {
        tabs.forEach((tab) => {
            expect(tab).toHaveProperty('name');
            expect(tab).toHaveProperty('title');
            expect(tab).toHaveProperty('icon');
            expect(typeof tab.name).toBe('string');
            expect(typeof tab.title).toBe('string');
            expect(tab.icon).toBeDefined();
        });
    });

    it('Home tab uses home icon', () => {
        expect(tabs[0].icon).toBe(icons.home);
    });

    it('Subscriptions tab uses wallet icon', () => {
        expect(tabs[1].icon).toBe(icons.wallet);
    });

    it('Insights tab uses activity icon', () => {
        expect(tabs[2].icon).toBe(icons.activity);
    });

    it('Settings tab uses setting icon', () => {
        expect(tabs[3].icon).toBe(icons.setting);
    });

    it('tab names are unique', () => {
        const names = tabs.map((t) => t.name);
        const uniqueNames = new Set(names);
        expect(uniqueNames.size).toBe(tabs.length);
    });

    it('tab titles are unique', () => {
        const titles = tabs.map((t) => t.title);
        const uniqueTitles = new Set(titles);
        expect(uniqueTitles.size).toBe(tabs.length);
    });
});