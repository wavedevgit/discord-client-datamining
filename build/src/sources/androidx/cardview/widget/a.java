package androidx.cardview.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class a implements CardViewImpl {
    private b p(CardViewDelegate cardViewDelegate) {
        return (b) cardViewDelegate.d();
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void a(CardViewDelegate cardViewDelegate, float f10) {
        p(cardViewDelegate).h(f10);
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public float b(CardViewDelegate cardViewDelegate) {
        return p(cardViewDelegate).d();
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void c(CardViewDelegate cardViewDelegate, float f10) {
        cardViewDelegate.f().setElevation(f10);
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public float d(CardViewDelegate cardViewDelegate) {
        return p(cardViewDelegate).c();
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public ColorStateList e(CardViewDelegate cardViewDelegate) {
        return p(cardViewDelegate).b();
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public float f(CardViewDelegate cardViewDelegate) {
        return b(cardViewDelegate) * 2.0f;
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void g(CardViewDelegate cardViewDelegate) {
        o(cardViewDelegate, d(cardViewDelegate));
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void h(CardViewDelegate cardViewDelegate, Context context, ColorStateList colorStateList, float f10, float f11, float f12) {
        cardViewDelegate.b(new b(colorStateList, f10));
        View f13 = cardViewDelegate.f();
        f13.setClipToOutline(true);
        f13.setElevation(f11);
        o(cardViewDelegate, f12);
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public float i(CardViewDelegate cardViewDelegate) {
        return cardViewDelegate.f().getElevation();
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void j(CardViewDelegate cardViewDelegate) {
        o(cardViewDelegate, d(cardViewDelegate));
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void k(CardViewDelegate cardViewDelegate) {
        if (!cardViewDelegate.c()) {
            cardViewDelegate.a(0, 0, 0, 0);
            return;
        }
        float d10 = d(cardViewDelegate);
        float b10 = b(cardViewDelegate);
        int ceil = (int) Math.ceil(c.a(d10, b10, cardViewDelegate.e()));
        int ceil2 = (int) Math.ceil(c.b(d10, b10, cardViewDelegate.e()));
        cardViewDelegate.a(ceil, ceil2, ceil, ceil2);
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void l() {
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public float m(CardViewDelegate cardViewDelegate) {
        return b(cardViewDelegate) * 2.0f;
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void n(CardViewDelegate cardViewDelegate, ColorStateList colorStateList) {
        p(cardViewDelegate).f(colorStateList);
    }

    @Override // androidx.cardview.widget.CardViewImpl
    public void o(CardViewDelegate cardViewDelegate, float f10) {
        p(cardViewDelegate).g(f10, cardViewDelegate.c(), cardViewDelegate.e());
        k(cardViewDelegate);
    }
}
