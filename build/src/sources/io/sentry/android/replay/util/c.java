package io.sentry.android.replay.util;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends Drawable {

    /* renamed from: e  reason: collision with root package name */
    public static final a f29648e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    public static final int f29649f = 8;

    /* renamed from: g  reason: collision with root package name */
    private static final int f29650g = Color.argb(32, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 20, 20);

    /* renamed from: h  reason: collision with root package name */
    private static final int f29651h = Color.argb((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 20, 20);

    /* renamed from: a  reason: collision with root package name */
    private final Paint f29652a = new Paint(1);

    /* renamed from: b  reason: collision with root package name */
    private final float f29653b = 6.0f;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f29654c = new Rect();

    /* renamed from: d  reason: collision with root package name */
    private List f29655d = CollectionsKt.l();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final void a(Canvas canvas, String str, float f10, float f11) {
        this.f29652a.setColor(-1);
        this.f29652a.setStyle(Paint.Style.STROKE);
        canvas.drawText(str, f10, f11, this.f29652a);
        this.f29652a.setColor(-16777216);
        this.f29652a.setStyle(Paint.Style.FILL);
        canvas.drawText(str, f10, f11, this.f29652a);
    }

    public final void b(List masks) {
        Intrinsics.checkNotNullParameter(masks, "masks");
        this.f29655d = masks;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        this.f29652a.setTextSize(32.0f);
        this.f29652a.setColor(-16777216);
        this.f29652a.setStrokeWidth(6.0f);
        for (Rect rect : this.f29655d) {
            this.f29652a.setColor(f29650g);
            this.f29652a.setStyle(Paint.Style.FILL);
            canvas.drawRect(rect, this.f29652a);
            this.f29652a.setColor(f29651h);
            this.f29652a.setStyle(Paint.Style.STROKE);
            canvas.drawRect(rect, this.f29652a);
            StringBuilder sb2 = new StringBuilder();
            sb2.append(rect.left);
            sb2.append('/');
            sb2.append(rect.top);
            String sb3 = sb2.toString();
            this.f29652a.getTextBounds(sb3, 0, sb3.length(), this.f29654c);
            a(canvas, sb3, rect.left, rect.top);
            StringBuilder sb4 = new StringBuilder();
            sb4.append(rect.right);
            sb4.append('/');
            sb4.append(rect.bottom);
            String sb5 = sb4.toString();
            this.f29652a.getTextBounds(sb5, 0, sb5.length(), this.f29654c);
            a(canvas, sb5, rect.right - this.f29654c.width(), rect.bottom + this.f29654c.height());
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
