class WelcomePanel extends Component {
    render({ closeTab, getStarted }) {
        return panel({ header: 'welcome', closeTab }, [
            div({ className: 'welcome-logo' }, [
                img({ src: 'images/logo.png' })
            ]),
            div({ className: 'welcome-links' }, [
                a({ href: 'https://github.com/zenzoa/mosi/wiki', target: '_blank' }, 'tutorial'),
                ' | ',
                a({ href: 'https://github.com/zenzoa/mosi/issues/new', target: '_blank' }, 'found a bug?')
            ]),
            row([
                button({
                    className: 'initial-focus fill',
                    onclick: getStarted
                }, `let's get started!`)
            ])
        ])
    }
}