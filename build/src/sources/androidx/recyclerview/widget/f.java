package androidx.recyclerview.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends RecyclerView.ItemDecoration {

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f4985d = {16843284};

    /* renamed from: a  reason: collision with root package name */
    private Drawable f4986a;

    /* renamed from: b  reason: collision with root package name */
    private int f4987b;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f4988c = new Rect();

    public f(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(f4985d);
        Drawable drawable = obtainStyledAttributes.getDrawable(0);
        this.f4986a = drawable;
        if (drawable == null) {
            Log.w("DividerItem", "@android:attr/listDivider was not set in the theme used for this DividerItemDecoration. Please set that attribute all call setDrawable()");
        }
        obtainStyledAttributes.recycle();
        e(i10);
    }

    private void a(Canvas canvas, RecyclerView recyclerView) {
        int height;
        int i10;
        canvas.save();
        if (recyclerView.getClipToPadding()) {
            i10 = recyclerView.getPaddingTop();
            height = recyclerView.getHeight() - recyclerView.getPaddingBottom();
            canvas.clipRect(recyclerView.getPaddingLeft(), i10, recyclerView.getWidth() - recyclerView.getPaddingRight(), height);
        } else {
            height = recyclerView.getHeight();
            i10 = 0;
        }
        int childCount = recyclerView.getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = recyclerView.getChildAt(i11);
            recyclerView.getLayoutManager().getDecoratedBoundsWithMargins(childAt, this.f4988c);
            int round = this.f4988c.right + Math.round(childAt.getTranslationX());
            this.f4986a.setBounds(round - this.f4986a.getIntrinsicWidth(), i10, round, height);
            this.f4986a.draw(canvas);
        }
        canvas.restore();
    }

    private void b(Canvas canvas, RecyclerView recyclerView) {
        int width;
        int i10;
        canvas.save();
        if (recyclerView.getClipToPadding()) {
            i10 = recyclerView.getPaddingLeft();
            width = recyclerView.getWidth() - recyclerView.getPaddingRight();
            canvas.clipRect(i10, recyclerView.getPaddingTop(), width, recyclerView.getHeight() - recyclerView.getPaddingBottom());
        } else {
            width = recyclerView.getWidth();
            i10 = 0;
        }
        int childCount = recyclerView.getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = recyclerView.getChildAt(i11);
            recyclerView.getDecoratedBoundsWithMargins(childAt, this.f4988c);
            int round = this.f4988c.bottom + Math.round(childAt.getTranslationY());
            this.f4986a.setBounds(i10, round - this.f4986a.getIntrinsicHeight(), width, round);
            this.f4986a.draw(canvas);
        }
        canvas.restore();
    }

    public Drawable c() {
        return this.f4986a;
    }

    public void d(Drawable drawable) {
        if (drawable != null) {
            this.f4986a = drawable;
            return;
        }
        throw new IllegalArgumentException("Drawable cannot be null.");
    }

    public void e(int i10) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException("Invalid orientation. It should be either HORIZONTAL or VERTICAL");
        }
        this.f4987b = i10;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
    public void getItemOffsets(Rect rect, View view, RecyclerView recyclerView, RecyclerView.State state) {
        Drawable drawable = this.f4986a;
        if (drawable == null) {
            rect.set(0, 0, 0, 0);
        } else if (this.f4987b == 1) {
            rect.set(0, 0, 0, drawable.getIntrinsicHeight());
        } else {
            rect.set(0, 0, drawable.getIntrinsicWidth(), 0);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
    public void onDraw(Canvas canvas, RecyclerView recyclerView, RecyclerView.State state) {
        if (recyclerView.getLayoutManager() != null && this.f4986a != null) {
            if (this.f4987b == 1) {
                b(canvas, recyclerView);
            } else {
                a(canvas, recyclerView);
            }
        }
    }
}
