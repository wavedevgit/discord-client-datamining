package le;

import android.graphics.Typeface;
import android.view.accessibility.CaptioningManager;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: g  reason: collision with root package name */
    public static final b f35819g = new b(-1, -16777216, 0, 0, -1, null);

    /* renamed from: a  reason: collision with root package name */
    public final int f35820a;

    /* renamed from: b  reason: collision with root package name */
    public final int f35821b;

    /* renamed from: c  reason: collision with root package name */
    public final int f35822c;

    /* renamed from: d  reason: collision with root package name */
    public final int f35823d;

    /* renamed from: e  reason: collision with root package name */
    public final int f35824e;

    /* renamed from: f  reason: collision with root package name */
    public final Typeface f35825f;

    public b(int i10, int i11, int i12, int i13, int i14, Typeface typeface) {
        this.f35820a = i10;
        this.f35821b = i11;
        this.f35822c = i12;
        this.f35823d = i13;
        this.f35824e = i14;
        this.f35825f = typeface;
    }

    public static b a(CaptioningManager.CaptionStyle captionStyle) {
        if (w0.f40711a >= 21) {
            return c(captionStyle);
        }
        return b(captionStyle);
    }

    private static b b(CaptioningManager.CaptionStyle captionStyle) {
        return new b(captionStyle.foregroundColor, captionStyle.backgroundColor, 0, captionStyle.edgeType, captionStyle.edgeColor, captionStyle.getTypeface());
    }

    private static b c(CaptioningManager.CaptionStyle captionStyle) {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        if (captionStyle.hasForegroundColor()) {
            i10 = captionStyle.foregroundColor;
        } else {
            i10 = f35819g.f35820a;
        }
        if (captionStyle.hasBackgroundColor()) {
            i11 = captionStyle.backgroundColor;
        } else {
            i11 = f35819g.f35821b;
        }
        if (captionStyle.hasWindowColor()) {
            i12 = captionStyle.windowColor;
        } else {
            i12 = f35819g.f35822c;
        }
        if (captionStyle.hasEdgeType()) {
            i13 = captionStyle.edgeType;
        } else {
            i13 = f35819g.f35823d;
        }
        if (captionStyle.hasEdgeColor()) {
            i14 = captionStyle.edgeColor;
        } else {
            i14 = f35819g.f35824e;
        }
        return new b(i10, i11, i12, i13, i14, captionStyle.getTypeface());
    }
}
