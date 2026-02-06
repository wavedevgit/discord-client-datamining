package com.google.android.material.carousel;

import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c {

    /* renamed from: a  reason: collision with root package name */
    final int f14759a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends c {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CarouselLayoutManager f14760b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(int i10, CarouselLayoutManager carouselLayoutManager) {
            super(i10, null);
            this.f14760b = carouselLayoutManager;
        }

        @Override // com.google.android.material.carousel.c
        public float d(RecyclerView.LayoutParams layoutParams) {
            return ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // com.google.android.material.carousel.c
        int e() {
            return this.f14760b.getHeight();
        }

        @Override // com.google.android.material.carousel.c
        int f() {
            return e();
        }

        @Override // com.google.android.material.carousel.c
        int g() {
            return this.f14760b.getPaddingLeft();
        }

        @Override // com.google.android.material.carousel.c
        int h() {
            return this.f14760b.getWidth() - this.f14760b.getPaddingRight();
        }

        @Override // com.google.android.material.carousel.c
        int i() {
            return j();
        }

        @Override // com.google.android.material.carousel.c
        int j() {
            return 0;
        }

        @Override // com.google.android.material.carousel.c
        public void k(View view, int i10, int i11) {
            int g10 = g();
            this.f14760b.layoutDecoratedWithMargins(view, g10, i10, g10 + m(view), i11);
        }

        @Override // com.google.android.material.carousel.c
        public void l(View view, Rect rect, float f10, float f11) {
            view.offsetTopAndBottom((int) (f11 - (rect.top + f10)));
        }

        int m(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f14760b.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends c {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CarouselLayoutManager f14761b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(int i10, CarouselLayoutManager carouselLayoutManager) {
            super(i10, null);
            this.f14761b = carouselLayoutManager;
        }

        @Override // com.google.android.material.carousel.c
        public float d(RecyclerView.LayoutParams layoutParams) {
            return ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
        }

        @Override // com.google.android.material.carousel.c
        int e() {
            return this.f14761b.getHeight() - this.f14761b.getPaddingBottom();
        }

        @Override // com.google.android.material.carousel.c
        int f() {
            if (this.f14761b.X()) {
                return g();
            }
            return h();
        }

        @Override // com.google.android.material.carousel.c
        int g() {
            return 0;
        }

        @Override // com.google.android.material.carousel.c
        int h() {
            return this.f14761b.getWidth();
        }

        @Override // com.google.android.material.carousel.c
        int i() {
            if (this.f14761b.X()) {
                return h();
            }
            return g();
        }

        @Override // com.google.android.material.carousel.c
        int j() {
            return this.f14761b.getPaddingTop();
        }

        @Override // com.google.android.material.carousel.c
        public void k(View view, int i10, int i11) {
            int j10 = j();
            this.f14761b.layoutDecoratedWithMargins(view, i10, j10, i11, j10 + m(view));
        }

        @Override // com.google.android.material.carousel.c
        public void l(View view, Rect rect, float f10, float f11) {
            view.offsetLeftAndRight((int) (f11 - (rect.left + f10)));
        }

        int m(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f14761b.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
    }

    /* synthetic */ c(int i10, a aVar) {
        this(i10);
    }

    private static c a(CarouselLayoutManager carouselLayoutManager) {
        return new b(0, carouselLayoutManager);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c b(CarouselLayoutManager carouselLayoutManager, int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return c(carouselLayoutManager);
            }
            throw new IllegalArgumentException("invalid orientation");
        }
        return a(carouselLayoutManager);
    }

    private static c c(CarouselLayoutManager carouselLayoutManager) {
        return new a(1, carouselLayoutManager);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract float d(RecyclerView.LayoutParams layoutParams);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int i();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void k(View view, int i10, int i11);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void l(View view, Rect rect, float f10, float f11);

    private c(int i10) {
        this.f14759a = i10;
    }
}
