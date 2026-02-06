package androidx.recyclerview.widget;

import android.graphics.Rect;
import android.view.View;
import android.view.ViewGroup;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class OrientationHelper {

    /* renamed from: a  reason: collision with root package name */
    protected final RecyclerView.LayoutManager f5245a;

    /* renamed from: b  reason: collision with root package name */
    private int f5246b;

    /* renamed from: c  reason: collision with root package name */
    final Rect f5247c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends OrientationHelper {
        a(RecyclerView.LayoutManager layoutManager) {
            super(layoutManager, null);
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int d(View view) {
            return this.f5245a.getDecoratedRight(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f5245a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f5245a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f5245a.getDecoratedLeft(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).leftMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f5245a.getWidth();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f5245a.getWidth() - this.f5245a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f5245a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f5245a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f5245a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f5245a.getPaddingLeft();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f5245a.getWidth() - this.f5245a.getPaddingLeft()) - this.f5245a.getPaddingRight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f5245a.getTransformedBoundingBox(view, true, this.f5247c);
            return this.f5247c.right;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f5245a.getTransformedBoundingBox(view, true, this.f5247c);
            return this.f5247c.left;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f5245a.offsetChildrenHorizontal(i10);
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
            return this.f5245a.getDecoratedBottom(view) + ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int e(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f5245a.getDecoratedMeasuredHeight(view) + ((ViewGroup.MarginLayoutParams) layoutParams).topMargin + ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int f(View view) {
            RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) view.getLayoutParams();
            return this.f5245a.getDecoratedMeasuredWidth(view) + ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin + ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int g(View view) {
            return this.f5245a.getDecoratedTop(view) - ((ViewGroup.MarginLayoutParams) ((RecyclerView.LayoutParams) view.getLayoutParams())).topMargin;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int h() {
            return this.f5245a.getHeight();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int i() {
            return this.f5245a.getHeight() - this.f5245a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int j() {
            return this.f5245a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int k() {
            return this.f5245a.getHeightMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int l() {
            return this.f5245a.getWidthMode();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int m() {
            return this.f5245a.getPaddingTop();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int n() {
            return (this.f5245a.getHeight() - this.f5245a.getPaddingTop()) - this.f5245a.getPaddingBottom();
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int p(View view) {
            this.f5245a.getTransformedBoundingBox(view, true, this.f5247c);
            return this.f5247c.bottom;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public int q(View view) {
            this.f5245a.getTransformedBoundingBox(view, true, this.f5247c);
            return this.f5247c.top;
        }

        @Override // androidx.recyclerview.widget.OrientationHelper
        public void r(int i10) {
            this.f5245a.offsetChildrenVertical(i10);
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
        if (Integer.MIN_VALUE == this.f5246b) {
            return 0;
        }
        return n() - this.f5246b;
    }

    public abstract int p(View view);

    public abstract int q(View view);

    public abstract void r(int i10);

    public void s() {
        this.f5246b = n();
    }

    private OrientationHelper(RecyclerView.LayoutManager layoutManager) {
        this.f5246b = Integer.MIN_VALUE;
        this.f5247c = new Rect();
        this.f5245a = layoutManager;
    }
}
