package com.google.android.material.carousel;

import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class b {

    /* renamed from: a  reason: collision with root package name */
    final int f15505a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends b {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CarouselLayoutManager f15506b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(int i10, CarouselLayoutManager carouselLayoutManager) {
            super(i10, null);
            this.f15506b = carouselLayoutManager;
        }

        @Override // com.google.android.material.carousel.b
        int d() {
            return this.f15506b.getHeight();
        }

        @Override // com.google.android.material.carousel.b
        int e() {
            return this.f15506b.getPaddingLeft();
        }

        @Override // com.google.android.material.carousel.b
        int f() {
            return this.f15506b.getWidth() - this.f15506b.getPaddingRight();
        }

        @Override // com.google.android.material.carousel.b
        int g() {
            return h();
        }

        @Override // com.google.android.material.carousel.b
        int h() {
            return 0;
        }

        @Override // com.google.android.material.carousel.b
        public void i(View view, int i10, int i11) {
            int e10 = e();
            this.f15506b.layoutDecoratedWithMargins(view, e10, i10, e10 + k(view), i11);
        }

        @Override // com.google.android.material.carousel.b
        public void j(View view, Rect rect, float f10, float f11) {
            view.offsetTopAndBottom((int) (f11 - (rect.top + f10)));
        }

        int k(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f15506b.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.carousel.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0178b extends b {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ CarouselLayoutManager f15507b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0178b(int i10, CarouselLayoutManager carouselLayoutManager) {
            super(i10, null);
            this.f15507b = carouselLayoutManager;
        }

        @Override // com.google.android.material.carousel.b
        int d() {
            return this.f15507b.getHeight() - this.f15507b.getPaddingBottom();
        }

        @Override // com.google.android.material.carousel.b
        int e() {
            return 0;
        }

        @Override // com.google.android.material.carousel.b
        int f() {
            return this.f15507b.getWidth();
        }

        @Override // com.google.android.material.carousel.b
        int g() {
            if (this.f15507b.X()) {
                return f();
            }
            return e();
        }

        @Override // com.google.android.material.carousel.b
        int h() {
            return this.f15507b.getPaddingTop();
        }

        @Override // com.google.android.material.carousel.b
        public void i(View view, int i10, int i11) {
            int h10 = h();
            this.f15507b.layoutDecoratedWithMargins(view, i10, h10, i11, h10 + k(view));
        }

        @Override // com.google.android.material.carousel.b
        public void j(View view, Rect rect, float f10, float f11) {
            view.offsetLeftAndRight((int) (f11 - (rect.left + f10)));
        }

        int k(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f15507b.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
    }

    /* synthetic */ b(int i10, a aVar) {
        this(i10);
    }

    private static b a(CarouselLayoutManager carouselLayoutManager) {
        return new C0178b(0, carouselLayoutManager);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b b(CarouselLayoutManager carouselLayoutManager, int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return c(carouselLayoutManager);
            }
            throw new IllegalArgumentException("invalid orientation");
        }
        return a(carouselLayoutManager);
    }

    private static b c(CarouselLayoutManager carouselLayoutManager) {
        return new a(1, carouselLayoutManager);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void i(View view, int i10, int i11);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void j(View view, Rect rect, float f10, float f11);

    private b(int i10) {
        this.f15505a = i10;
    }
}
