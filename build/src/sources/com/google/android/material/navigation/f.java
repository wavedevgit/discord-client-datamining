package com.google.android.material.navigation;

import android.view.MenuItem;
import android.view.SubMenu;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.appcompat.view.menu.e f16002a;

    /* renamed from: c  reason: collision with root package name */
    private int f16004c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f16005d = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f16006e = 0;

    /* renamed from: b  reason: collision with root package name */
    private final List f16003b = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(androidx.appcompat.view.menu.e eVar) {
        this.f16002a = eVar;
        f();
    }

    public int a() {
        return this.f16004c;
    }

    public MenuItem b(int i10) {
        return (MenuItem) this.f16003b.get(i10);
    }

    public int c() {
        return this.f16005d;
    }

    public int d() {
        return this.f16006e;
    }

    public boolean e(MenuItem menuItem, androidx.appcompat.view.menu.j jVar, int i10) {
        return this.f16002a.P(menuItem, jVar, i10);
    }

    public void f() {
        List list;
        List list2;
        List list3;
        this.f16003b.clear();
        this.f16004c = 0;
        this.f16005d = 0;
        this.f16006e = 0;
        for (int i10 = 0; i10 < this.f16002a.size(); i10++) {
            MenuItem item = this.f16002a.getItem(i10);
            if (item.hasSubMenu()) {
                if (!this.f16003b.isEmpty()) {
                    if (!(this.f16003b.get(list3.size() - 1) instanceof a) && item.isVisible()) {
                        this.f16003b.add(new a());
                    }
                }
                this.f16003b.add(item);
                SubMenu subMenu = item.getSubMenu();
                for (int i11 = 0; i11 < subMenu.size(); i11++) {
                    MenuItem item2 = subMenu.getItem(i11);
                    if (!item.isVisible()) {
                        item2.setVisible(false);
                    }
                    this.f16003b.add(item2);
                    this.f16004c++;
                    if (item2.isVisible()) {
                        this.f16005d++;
                    }
                }
                this.f16003b.add(new a());
            } else {
                this.f16003b.add(item);
                this.f16004c++;
                if (item.isVisible()) {
                    this.f16005d++;
                    this.f16006e++;
                }
            }
        }
        if (!this.f16003b.isEmpty()) {
            if (this.f16003b.get(list.size() - 1) instanceof a) {
                this.f16003b.remove(list2.size() - 1);
            }
        }
    }

    public int g() {
        return this.f16003b.size();
    }
}
