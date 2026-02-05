package androidx.recyclerview.widget;

import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class OrientationHelper {

    /* renamed from: a  reason: collision with root package name */
    protected final RecyclerView.LayoutManager f4916a;

    /* renamed from: b  reason: collision with root package name */
    private int f4917b;

    /* renamed from: c  reason: collision with root package name */
    final Rect f4918c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends OrientationHelper {
        a(RecyclerView.LayoutManager layoutManager) {
            super(layoutManager, null);
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int d(View view) {
            return this.f4916a.getDecoratedRight(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4916a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4916a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f4916a.getDecoratedLeft(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).leftMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f4916a.getWidth();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f4916a.getWidth() - this.f4916a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f4916a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f4916a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f4916a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f4916a.getPaddingLeft();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f4916a.getWidth() - this.f4916a.getPaddingLeft()) - this.f4916a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f4916a.getTransformedBoundingBox(view, true, this.f4918c);
            return this.f4918c.right;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f4916a.getTransformedBoundingBox(view, true, this.f4918c);
            return this.f4918c.left;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f4916a.offsetChildrenHorizontal(i10);
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
            return this.f4916a.getDecoratedBottom(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4916a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f4916a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f4916a.getDecoratedTop(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).topMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f4916a.getHeight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f4916a.getHeight() - this.f4916a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f4916a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f4916a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f4916a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f4916a.getPaddingTop();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f4916a.getHeight() - this.f4916a.getPaddingTop()) - this.f4916a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f4916a.getTransformedBoundingBox(view, true, this.f4918c);
            return this.f4918c.bottom;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f4916a.getTransformedBoundingBox(view, true, this.f4918c);
            return this.f4918c.top;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f4916a.offsetChildrenVertical(i10);
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
        if (Integer.MIN_VALUE == this.f4917b) {
            return 0;
        }
        return n() - this.f4917b;
    }

    public abstract int p(View view);

    public abstract int q(View view);

    public abstract void r(int i10);

    public void s() {
        this.f4917b = n();
    }

    private OrientationHelper(RecyclerView.LayoutManager layoutManager) {
        this.f4917b = Integer.MIN_VALUE;
        this.f4918c = new Rect();
        this.f4916a = layoutManager;
    }
}
