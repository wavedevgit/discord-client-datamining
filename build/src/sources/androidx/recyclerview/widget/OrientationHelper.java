package androidx.recyclerview.widget;

import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class OrientationHelper {

    /* renamed from: a  reason: collision with root package name */
    protected final RecyclerView.LayoutManager f4804a;

    /* renamed from: b  reason: collision with root package name */
    private int f4805b;

    /* renamed from: c  reason: collision with root package name */
    final Rect f4806c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends OrientationHelper {
        a(RecyclerView.LayoutManager layoutManager) {
            super(layoutManager, null);
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int d(View view) {
            return this.f4804a.getDecoratedRight(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4804a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4804a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f4804a.getDecoratedLeft(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).leftMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f4804a.getWidth();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f4804a.getWidth() - this.f4804a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f4804a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f4804a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f4804a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f4804a.getPaddingLeft();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f4804a.getWidth() - this.f4804a.getPaddingLeft()) - this.f4804a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f4804a.getTransformedBoundingBox(view, true, this.f4806c);
            return this.f4806c.right;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f4804a.getTransformedBoundingBox(view, true, this.f4806c);
            return this.f4806c.left;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f4804a.offsetChildrenHorizontal(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends OrientationHelper {
        b(RecyclerView.LayoutManager layoutManager) {
            super(layoutManager, null);
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int d(View view) {
            return this.f4804a.getDecoratedBottom(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4804a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4804a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f4804a.getDecoratedTop(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).topMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f4804a.getHeight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f4804a.getHeight() - this.f4804a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f4804a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f4804a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f4804a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f4804a.getPaddingTop();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f4804a.getHeight() - this.f4804a.getPaddingTop()) - this.f4804a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f4804a.getTransformedBoundingBox(view, true, this.f4806c);
            return this.f4806c.bottom;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f4804a.getTransformedBoundingBox(view, true, this.f4806c);
            return this.f4806c.top;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f4804a.offsetChildrenVertical(i10);
        }
    }

    /* synthetic */ OrientationHelper(RecyclerView.LayoutManager layoutManager, a aVar) {
        this(layoutManager);
    }

    public static OrientationHelper a(RecyclerView.LayoutManager layoutManager) {
        return new a(layoutManager);
    }

    public static OrientationHelper b(RecyclerView.LayoutManager layoutManager, int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return c(layoutManager);
            }
            throw new IllegalArgumentException("invalid orientation");
        }
        return a(layoutManager);
    }

    public static OrientationHelper c(RecyclerView.LayoutManager layoutManager) {
        return new b(layoutManager);
    }

    public abstract int d(View view);

    public abstract int e(View view);

    public abstract int f(View view);

    public abstract int g(View view);

    public abstract int h();

    public abstract int i();

    public abstract int j();

    public abstract int k();

    public abstract int l();

    public abstract int m();

    public abstract int n();

    public int o() {
        if (Integer.MIN_VALUE == this.f4805b) {
            return 0;
        }
        return n() - this.f4805b;
    }

    public abstract int p(View view);

    public abstract int q(View view);

    public abstract void r(int i10);

    public void s() {
        this.f4805b = n();
    }

    private OrientationHelper(RecyclerView.LayoutManager layoutManager) {
        this.f4805b = Integer.MIN_VALUE;
        this.f4806c = new Rect();
        this.f4804a = layoutManager;
    }
}
