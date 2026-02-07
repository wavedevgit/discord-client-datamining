package ke;

import android.graphics.Typeface;
import android.view.accessibility.CaptioningManager;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: g  reason: collision with root package name */
    public static final b f31599g = new b(-1, -16777216, 0, 0, -1, null);

    /* renamed from: a  reason: collision with root package name */
    public final int f31600a;

    /* renamed from: b  reason: collision with root package name */
    public final int f31601b;

    /* renamed from: c  reason: collision with root package name */
    public final int f31602c;

    /* renamed from: d  reason: collision with root package name */
    public final int f31603d;

    /* renamed from: e  reason: collision with root package name */
    public final int f31604e;

    /* renamed from: f  reason: collision with root package name */
    public final Typeface f31605f;

    public b(int i10, int i11, int i12, int i13, int i14, Typeface typeface) {
        this.f31600a = i10;
        this.f31601b = i11;
        this.f31602c = i12;
        this.f31603d = i13;
        this.f31604e = i14;
        this.f31605f = typeface;
    }

    public static b a(CaptioningManager.CaptionStyle captionStyle) {
        if (w0.f39060a >= 21) {
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
            i10 = f31599g.f31600a;
        }
        if (captionStyle.hasBackgroundColor()) {
            i11 = captionStyle.backgroundColor;
        } else {
            i11 = f31599g.f31601b;
        }
        if (captionStyle.hasWindowColor()) {
            i12 = captionStyle.windowColor;
        } else {
            i12 = f31599g.f31602c;
        }
        if (captionStyle.hasEdgeType()) {
            i13 = captionStyle.edgeType;
        } else {
            i13 = f31599g.f31603d;
        }
        if (captionStyle.hasEdgeColor()) {
            i14 = captionStyle.edgeColor;
        } else {
            i14 = f31599g.f31604e;
        }
        return new b(i10, i11, i12, i13, i14, captionStyle.getTypeface());
    }
}
