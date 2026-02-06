package ke;

import android.graphics.Typeface;
import android.view.accessibility.CaptioningManager;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: g  reason: collision with root package name */
    public static final b f31551g = new b(-1, -16777216, 0, 0, -1, null);

    /* renamed from: a  reason: collision with root package name */
    public final int f31552a;

    /* renamed from: b  reason: collision with root package name */
    public final int f31553b;

    /* renamed from: c  reason: collision with root package name */
    public final int f31554c;

    /* renamed from: d  reason: collision with root package name */
    public final int f31555d;

    /* renamed from: e  reason: collision with root package name */
    public final int f31556e;

    /* renamed from: f  reason: collision with root package name */
    public final Typeface f31557f;

    public b(int i10, int i11, int i12, int i13, int i14, Typeface typeface) {
        this.f31552a = i10;
        this.f31553b = i11;
        this.f31554c = i12;
        this.f31555d = i13;
        this.f31556e = i14;
        this.f31557f = typeface;
    }

    public static b a(CaptioningManager.CaptionStyle captionStyle) {
        if (w0.f39012a >= 21) {
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
            i10 = f31551g.f31552a;
        }
        if (captionStyle.hasBackgroundColor()) {
            i11 = captionStyle.backgroundColor;
        } else {
            i11 = f31551g.f31553b;
        }
        if (captionStyle.hasWindowColor()) {
            i12 = captionStyle.windowColor;
        } else {
            i12 = f31551g.f31554c;
        }
        if (captionStyle.hasEdgeType()) {
            i13 = captionStyle.edgeType;
        } else {
            i13 = f31551g.f31555d;
        }
        if (captionStyle.hasEdgeColor()) {
            i14 = captionStyle.edgeColor;
        } else {
            i14 = f31551g.f31556e;
        }
        return new b(i10, i11, i12, i13, i14, captionStyle.getTypeface());
    }
}
