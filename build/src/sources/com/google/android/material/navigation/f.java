package com.google.android.material.navigation;

import android.view.MenuItem;
import android.view.SubMenu;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final androidx.appcompat.view.menu.e f16001a;

    /* renamed from: c  reason: collision with root package name */
    private int f16003c = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f16004d = 0;

    /* renamed from: e  reason: collision with root package name */
    private int f16005e = 0;

    /* renamed from: b  reason: collision with root package name */
    private final List f16002b = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(androidx.appcompat.view.menu.e eVar) {
        this.f16001a = eVar;
        f();
    }

    public int a() {
        return this.f16003c;
    }

    public MenuItem b(int i10) {
        return (MenuItem) this.f16002b.get(i10);
    }

    public int c() {
        return this.f16004d;
    }

    public int d() {
        return this.f16005e;
    }

    public boolean e(MenuItem menuItem, androidx.appcompat.view.menu.j jVar, int i10) {
        return this.f16001a.P(menuItem, jVar, i10);
    }

    public void f() {
        List list;
        List list2;
        List list3;
        this.f16002b.clear();
        this.f16003c = 0;
        this.f16004d = 0;
        this.f16005e = 0;
        for (int i10 = 0; i10 < this.f16001a.size(); i10++) {
            MenuItem item = this.f16001a.getItem(i10);
            if (item.hasSubMenu()) {
                if (!this.f16002b.isEmpty()) {
                    if (!(this.f16002b.get(list3.size() - 1) instanceof a) && item.isVisible()) {
                        this.f16002b.add(new a());
                    }
                }
                this.f16002b.add(item);
                SubMenu subMenu = item.getSubMenu();
                for (int i11 = 0; i11 < subMenu.size(); i11++) {
                    MenuItem item2 = subMenu.getItem(i11);
                    if (!item.isVisible()) {
                        item2.setVisible(false);
                    }
                    this.f16002b.add(item2);
                    this.f16003c++;
                    if (item2.isVisible()) {
                        this.f16004d++;
                    }
                }
                this.f16002b.add(new a());
            } else {
                this.f16002b.add(item);
                this.f16003c++;
                if (item.isVisible()) {
                    this.f16004d++;
                    this.f16005e++;
                }
            }
        }
        if (!this.f16002b.isEmpty()) {
            if (this.f16002b.get(list.size() - 1) instanceof a) {
                this.f16002b.remove(list2.size() - 1);
            }
        }
    }

    public int g() {
        return this.f16002b.size();
    }
}
