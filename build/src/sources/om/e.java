package om;

import android.graphics.drawable.Drawable;
import android.os.Build;
import android.text.Layout;
import android.view.ViewTreeObserver;
import android.widget.EditText;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final EditText f40621a;

    /* renamed from: b  reason: collision with root package name */
    private final Function6 f40622b;

    /* renamed from: c  reason: collision with root package name */
    private int f40623c;

    /* renamed from: d  reason: collision with root package name */
    private int f40624d;

    /* renamed from: e  reason: collision with root package name */
    private int f40625e;

    /* renamed from: f  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f40626f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ViewTreeObserver.OnPreDrawListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            int paddingTop;
            int i10;
            Drawable textCursorDrawable;
            int selectionStart = e.this.f40621a.getSelectionStart();
            int selectionEnd = e.this.f40621a.getSelectionEnd();
            int height = e.this.f40621a.getHeight();
            EditText editText = e.this.f40621a;
            Layout layout = editText.getLayout();
            if (layout == null) {
                return true;
            }
            if (e.this.f40623c != selectionStart || e.this.f40624d != selectionEnd || e.this.f40625e != height) {
                e.this.f40623c = selectionStart;
                e.this.f40624d = selectionEnd;
                e.this.f40625e = height;
                int min = Math.min(selectionStart, selectionEnd);
                int max = Math.max(selectionStart, selectionEnd);
                int lineTop = layout.getLineTop(layout.getLineForOffset(min));
                int height2 = layout.getHeight();
                int i11 = 0;
                if (Build.VERSION.SDK_INT >= 29 && (textCursorDrawable = editText.getTextCursorDrawable()) != null) {
                    i11 = textCursorDrawable.getIntrinsicWidth();
                }
                int gravity = e.this.f40621a.getGravity() & 112;
                int paddingTop2 = e.this.f40621a.getPaddingTop() + e.this.f40621a.getPaddingBottom();
                int lineHeight = e.this.f40621a.getLineHeight() / 2;
                int i12 = height - paddingTop2;
                if (height2 <= i12) {
                    if (gravity != 16) {
                        if (gravity != 80) {
                            paddingTop = e.this.f40621a.getPaddingTop();
                        } else {
                            i10 = e.this.f40621a.getPaddingTop() + (i12 - height2) + lineHeight;
                            float primaryHorizontal = layout.getPrimaryHorizontal(min);
                            int lineForOffset = layout.getLineForOffset(max);
                            e.this.f40622b.invoke(Integer.valueOf(selectionStart), Integer.valueOf(selectionEnd), Double.valueOf(d.a(primaryHorizontal)), Double.valueOf(d.a((lineTop + i10) - editText.getScrollY())), Double.valueOf(d.a(layout.getPrimaryHorizontal(max) + i11)), Double.valueOf(d.a((layout.getLineBottom(lineForOffset) + i10) - editText.getScrollY())));
                        }
                    } else {
                        paddingTop = ((i12 - height2) / 2) + e.this.f40621a.getPaddingTop();
                    }
                } else {
                    paddingTop = e.this.f40621a.getPaddingTop();
                }
                i10 = paddingTop + lineHeight;
                float primaryHorizontal2 = layout.getPrimaryHorizontal(min);
                int lineForOffset2 = layout.getLineForOffset(max);
                e.this.f40622b.invoke(Integer.valueOf(selectionStart), Integer.valueOf(selectionEnd), Double.valueOf(d.a(primaryHorizontal2)), Double.valueOf(d.a((lineTop + i10) - editText.getScrollY())), Double.valueOf(d.a(layout.getPrimaryHorizontal(max) + i11)), Double.valueOf(d.a((layout.getLineBottom(lineForOffset2) + i10) - editText.getScrollY())));
            }
            return true;
        }
    }

    public e(EditText editText, Function6 action) {
        Intrinsics.checkNotNullParameter(editText, "editText");
        Intrinsics.checkNotNullParameter(action, "action");
        this.f40621a = editText;
        this.f40622b = action;
        this.f40623c = -1;
        this.f40624d = -1;
        this.f40625e = -1;
        this.f40626f = new a();
    }

    public final void i() {
        this.f40621a.getViewTreeObserver().removeOnPreDrawListener(this.f40626f);
    }

    public final void j() {
        this.f40621a.getViewTreeObserver().addOnPreDrawListener(this.f40626f);
    }
}
