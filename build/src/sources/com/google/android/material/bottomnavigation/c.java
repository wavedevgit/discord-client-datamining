package com.google.android.material.bottomnavigation;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import androidx.appcompat.widget.v0;
import androidx.core.view.WindowInsetsCompat;
import bh.k;
import com.google.android.material.internal.m;
import com.google.android.material.internal.p;
import com.google.android.material.navigation.h;
import com.google.android.material.navigation.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends l {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements p.c {
        a() {
        }

        @Override // com.google.android.material.internal.p.c
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat, p.d dVar) {
            int i10;
            dVar.f15939d += windowInsetsCompat.n();
            boolean z10 = true;
            if (view.getLayoutDirection() != 1) {
                z10 = false;
            }
            int o10 = windowInsetsCompat.o();
            int p10 = windowInsetsCompat.p();
            int i11 = dVar.f15936a;
            if (z10) {
                i10 = p10;
            } else {
                i10 = o10;
            }
            dVar.f15936a = i11 + i10;
            int i12 = dVar.f15938c;
            if (!z10) {
                o10 = p10;
            }
            dVar.f15938c = i12 + o10;
            dVar.a(view);
            return windowInsetsCompat;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends l.b {
    }

    /* renamed from: com.google.android.material.bottomnavigation.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0175c extends l.c {
    }

    public c(Context context) {
        this(context, null);
    }

    private void j() {
        p.c(this, new a());
    }

    private int k(int i10) {
        int suggestedMinimumHeight = getSuggestedMinimumHeight();
        if (View.MeasureSpec.getMode(i10) != 1073741824 && suggestedMinimumHeight > 0) {
            return View.MeasureSpec.makeMeasureSpec(Math.max(View.MeasureSpec.getSize(i10), suggestedMinimumHeight + getPaddingTop() + getPaddingBottom()), Integer.MIN_VALUE);
        }
        return i10;
    }

    @Override // com.google.android.material.navigation.l
    protected h c(Context context) {
        return new com.google.android.material.bottomnavigation.b(context);
    }

    @Override // com.google.android.material.navigation.l
    public int getMaxItemCount() {
        return 6;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, k(i11));
        if (View.MeasureSpec.getMode(i11) != 1073741824) {
            setMeasuredDimension(getMeasuredWidth(), Math.max(getMeasuredHeight(), getSuggestedMinimumHeight() + getPaddingTop() + getPaddingBottom()));
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        super.onTouchEvent(motionEvent);
        return true;
    }

    public void setItemHorizontalTranslationEnabled(boolean z10) {
        com.google.android.material.bottomnavigation.b bVar = (com.google.android.material.bottomnavigation.b) getMenuView();
        if (bVar.v() != z10) {
            bVar.setItemHorizontalTranslationEnabled(z10);
            getPresenter().g(false);
        }
    }

    @Deprecated
    public void setOnNavigationItemReselectedListener(b bVar) {
        setOnItemReselectedListener(bVar);
    }

    @Deprecated
    public void setOnNavigationItemSelectedListener(InterfaceC0175c interfaceC0175c) {
        setOnItemSelectedListener(interfaceC0175c);
    }

    public c(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6727c);
    }

    public c(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, k.f6935j);
    }

    public c(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        v0 j10 = m.j(getContext(), attributeSet, bh.l.f7043j0, i10, i11, new int[0]);
        setItemHorizontalTranslationEnabled(j10.a(bh.l.f7063l0, true));
        if (j10.s(bh.l.f7053k0)) {
            setMinimumHeight(j10.f(bh.l.f7053k0, 0));
        }
        j10.x();
        j();
    }
}
