import styles from './Tabs.module.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import * as images from './assets';
import TabContent from './components/TabContent';

const tabsData = {
  titles: [
    {
      text: 'Time Tracking with Screenshots',
      img: images.icon1,
    },
    {
      text: 'Productivity Monitoring',
      img: images.icon2,
    },
    {
      text: 'Task Management',
      img: images.icon3,
    },
    {
      text: 'Communication Channels',
      img: images.icon4,
    },
    {
      text: 'HR Tools',
      img: images.icon5,
    },
    {
      text: 'Online Reports',
      img: images.icon6,
    },
  ],
  content: [
    <TabContent title="Track the time your employees spend on work and get detailed information " />,
    <TabContent title="Some other tab content title with more than 50 characters, and so on " />,
    <TabContent title="This titles makes  each tab different, so the user can see tabs changing" />,
    <TabContent title="Again some loooooooong title with loooooooog words" />,
    <TabContent title="Actually here I could write just lorem ipsum, or some other not meaningless text" />,
    <TabContent title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />,
  ],
};
function TabsSection() {
  return (
    <div className={styles.wrapper}>
      <h2>
        Save Big on All Features <br />
        <i>no exceptions</i>
      </h2>
      <Tabs className={styles.tabs}>
        <TabList className={styles.tabs_list}>
          {tabsData.titles.map(({ img, text }, index) => (
            <Tab key={`tabs_tab_${index}`} className={styles.tab}>
              <img src={img} alt="icon" />
              {text}
            </Tab>
          ))}
        </TabList>
        {tabsData.content.map((tabContent, index) => (
          <TabPanel key={`tabs_panel_${index}`} className={styles.tab_content}>
            {tabContent}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default TabsSection;
