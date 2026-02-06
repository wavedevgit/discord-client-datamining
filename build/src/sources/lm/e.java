package lm;

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
    private final EditText f36368a;

    /* renamed from: b  reason: collision with root package name */
    private final Function6 f36369b;

    /* renamed from: c  reason: collision with root package name */
    private int f36370c;

    /* renamed from: d  reason: collision with root package name */
    private int f36371d;

    /* renamed from: e  reason: collision with root package name */
    private int f36372e;

    /* renamed from: f  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f36373f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ViewTreeObserver.OnPreDrawListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            int paddingTop;
            int i10;
            Drawable textCursorDrawable;
            int selectionStart = e.this.f36368a.getSelectionStart();
            int selectionEnd = e.this.f36368a.getSelectionEnd();
            int height = e.this.f36368a.getHeight();
            EditText editText = e.this.f36368a;
            Layout layout = editText.getLayout();
            if (layout == null) {
                return true;
            }
            if (e.this.f36370c != selectionStart || e.this.f36371d != selectionEnd || e.this.f36372e != height) {
                e.this.f36370c = selectionStart;
                e.this.f36371d = selectionEnd;
                e.this.f36372e = height;
                int min = Math.min(selectionStart, selectionEnd);
                int max = Math.max(selectionStart, selectionEnd);
                int lineTop = layout.getLineTop(layout.getLineForOffset(min));
                int height2 = layout.getHeight();
                int i11 = 0;
                if (Build.VERSION.SDK_INT >= 29 && (textCursorDrawable = editText.getTextCursorDrawable()) != null) {
                    i11 = textCursorDrawable.getIntrinsicWidth();
                }
                int gravity = e.this.f36368a.getGravity() & 112;
                int paddingTop2 = e.this.f36368a.getPaddingTop() + e.this.f36368a.getPaddingBottom();
                int lineHeight = e.this.f36368a.getLineHeight() / 2;
                int i12 = height - paddingTop2;
                if (height2 <= i12) {
                    if (gravity != 16) {
                        if (gravity != 80) {
                            paddingTop = e.this.f36368a.getPaddingTop();
                        } else {
                            i10 = e.this.f36368a.getPaddingTop() + (i12 - height2) + lineHeight;
                            float primaryHorizontal = layout.getPrimaryHorizontal(min);
                            int lineForOffset = layout.getLineForOffset(max);
                            e.this.f36369b.invoke(Integer.valueOf(selectionStart), Integer.valueOf(selectionEnd), Double.valueOf(d.a(primaryHorizontal)), Double.valueOf(d.a((lineTop + i10) - editText.getScrollY())), Double.valueOf(d.a(layout.getPrimaryHorizontal(max) + i11)), Double.valueOf(d.a((layout.getLineBottom(lineForOffset) + i10) - editText.getScrollY())));
                        }
                    } else {
                        paddingTop = ((i12 - height2) / 2) + e.this.f36368a.getPaddingTop();
                    }
                } else {
                    paddingTop = e.this.f36368a.getPaddingTop();
                }
                i10 = paddingTop + lineHeight;
                float primaryHorizontal2 = layout.getPrimaryHorizontal(min);
                int lineForOffset2 = layout.getLineForOffset(max);
                e.this.f36369b.invoke(Integer.valueOf(selectionStart), Integer.valueOf(selectionEnd), Double.valueOf(d.a(primaryHorizontal2)), Double.valueOf(d.a((lineTop + i10) - editText.getScrollY())), Double.valueOf(d.a(layout.getPrimaryHorizontal(max) + i11)), Double.valueOf(d.a((layout.getLineBottom(lineForOffset2) + i10) - editText.getScrollY())));
            }
            return true;
        }
    }

    public e(EditText editText, Function6 action) {
        Intrinsics.checkNotNullParameter(editText, "editText");
        Intrinsics.checkNotNullParameter(action, "action");
        this.f36368a = editText;
        this.f36369b = action;
        this.f36370c = -1;
        this.f36371d = -1;
        this.f36372e = -1;
        this.f36373f = new a();
    }

    public final void i() {
        this.f36368a.getViewTreeObserver().removeOnPreDrawListener(this.f36373f);
    }

    public final void j() {
        this.f36368a.getViewTreeObserver().addOnPreDrawListener(this.f36373f);
    }
}
