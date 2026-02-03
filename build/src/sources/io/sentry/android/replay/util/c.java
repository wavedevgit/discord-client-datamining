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
    public static final a f29230e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    public static final int f29231f = 8;

    /* renamed from: g  reason: collision with root package name */
    private static final int f29232g = Color.argb(32, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 20, 20);

    /* renamed from: h  reason: collision with root package name */
    private static final int f29233h = Color.argb((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, (int) SetSpanOperation.SPAN_MAX_PRIORITY, 20, 20);

    /* renamed from: a  reason: collision with root package name */
    private final Paint f29234a = new Paint(1);

    /* renamed from: b  reason: collision with root package name */
    private final float f29235b = 6.0f;

    /* renamed from: c  reason: collision with root package name */
    private final Rect f29236c = new Rect();

    /* renamed from: d  reason: collision with root package name */
    private List f29237d = CollectionsKt.l();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final void a(Canvas canvas, String str, float f10, float f11) {
        this.f29234a.setColor(-1);
        this.f29234a.setStyle(Paint.Style.STROKE);
        canvas.drawText(str, f10, f11, this.f29234a);
        this.f29234a.setColor(-16777216);
        this.f29234a.setStyle(Paint.Style.FILL);
        canvas.drawText(str, f10, f11, this.f29234a);
    }

    public final void b(List masks) {
        Intrinsics.checkNotNullParameter(masks, "masks");
        this.f29237d = masks;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        this.f29234a.setTextSize(32.0f);
        this.f29234a.setColor(-16777216);
        this.f29234a.setStrokeWidth(6.0f);
        for (Rect rect : this.f29237d) {
            this.f29234a.setColor(f29232g);
            this.f29234a.setStyle(Paint.Style.FILL);
            canvas.drawRect(rect, this.f29234a);
            this.f29234a.setColor(f29233h);
            this.f29234a.setStyle(Paint.Style.STROKE);
            canvas.drawRect(rect, this.f29234a);
            StringBuilder sb2 = new StringBuilder();
            sb2.append(rect.left);
            sb2.append('/');
            sb2.append(rect.top);
            String sb3 = sb2.toString();
            this.f29234a.getTextBounds(sb3, 0, sb3.length(), this.f29236c);
            a(canvas, sb3, rect.left, rect.top);
            StringBuilder sb4 = new StringBuilder();
            sb4.append(rect.right);
            sb4.append('/');
            sb4.append(rect.bottom);
            String sb5 = sb4.toString();
            this.f29234a.getTextBounds(sb5, 0, sb5.length(), this.f29236c);
            a(canvas, sb5, rect.right - this.f29236c.width(), rect.bottom + this.f29236c.height());
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
