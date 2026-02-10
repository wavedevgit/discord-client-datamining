package com.google.android.material.navigation;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends androidx.appcompat.view.menu.e {
    private final Class B;
    private final int C;
    private final boolean D;

    public e(Context context, Class cls, int i10, boolean z10) {
        super(context);
        this.B = cls;
        this.C = i10;
        this.D = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.view.menu.e
    public MenuItem a(int i10, int i11, int i12, CharSequence charSequence) {
        if (size() + 1 <= this.C) {
            i0();
            MenuItem a10 = super.a(i10, i11, i12, charSequence);
            h0();
            return a10;
        }
        String simpleName = this.B.getSimpleName();
        throw new IllegalArgumentException("Maximum number of items supported by " + simpleName + " is " + this.C + ". Limit can be checked with " + simpleName + "#getMaxItemCount()");
    }

    @Override // androidx.appcompat.view.menu.e, android.view.Menu
    public SubMenu addSubMenu(int i10, int i11, int i12, CharSequence charSequence) {
        if (this.D) {
            androidx.appcompat.view.menu.g gVar = (androidx.appcompat.view.menu.g) a(i10, i11, i12, charSequence);
            j jVar = new j(w(), this, gVar);
            gVar.x(jVar);
            return jVar;
        }
        throw new UnsupportedOperationException(this.B.getSimpleName() + " does not support submenus");
    }
}
