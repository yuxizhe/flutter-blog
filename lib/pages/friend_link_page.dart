import 'package:flutter/material.dart';
import 'package:flutter_blog/widgets/web_bar.dart';
import '../widgets/friend_link_item.dart';
import '../widgets/common_layout.dart';
import '../json/link_item_bean.dart';

class FriendLinkPage extends StatelessWidget {
  final List<LinkItemBean> beans = [
    LinkItemBean(
        linkName: "冷石的博客",
        linkAddress: "https://coldstone.fun/",
        linkDescription: ["前端开发","顺便写写flutter","全栈","炒粉大师！"],
        linkAvatar: "https://avatars2.githubusercontent.com/u/18013127?s=460&v=4"),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CommonLayout(
        pageType: PageType.link,
        child: Container(
          child: NotificationListener<OverscrollIndicatorNotification>(
            onNotification: (overScroll) {
              overScroll.disallowGlow();
              return true;
            },
            child: GridView.count(
              crossAxisCount: 3,
              children: List.generate(beans.length, (index) {
                return FriendLinkItem(
                  bean: beans[index],
                );
              }),
            ),
          ),
        ),
      ),
    );
  }
}