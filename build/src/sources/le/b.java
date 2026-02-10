package le;

import android.graphics.Typeface;
import android.view.accessibility.CaptioningManager;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: g  reason: collision with root package name */
    public static final b f35716g = new b(-1, -16777216, 0, 0, -1, null);

    /* renamed from: a  reason: collision with root package name */
    public final int f35717a;

    /* renamed from: b  reason: collision with root package name */
    public final int f35718b;

    /* renamed from: c  reason: collision with root package name */
    public final int f35719c;

    /* renamed from: d  reason: collision with root package name */
    public final int f35720d;

    /* renamed from: e  reason: collision with root package name */
    public final int f35721e;

    /* renamed from: f  reason: collision with root package name */
    public final Typeface f35722f;

    public b(int i10, int i11, int i12, int i13, int i14, Typeface typeface) {
        this.f35717a = i10;
        this.f35718b = i11;
        this.f35719c = i12;
        this.f35720d = i13;
        this.f35721e = i14;
        this.f35722f = typeface;
    }

    public static b a(CaptioningManager.CaptionStyle captionStyle) {
        if (w0.f39037a >= 21) {
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
            i10 = f35716g.f35717a;
        }
        if (captionStyle.hasBackgroundColor()) {
            i11 = captionStyle.backgroundColor;
        } else {
            i11 = f35716g.f35718b;
        }
        if (captionStyle.hasWindowColor()) {
            i12 = captionStyle.windowColor;
        } else {
            i12 = f35716g.f35719c;
        }
        if (captionStyle.hasEdgeType()) {
            i13 = captionStyle.edgeType;
        } else {
            i13 = f35716g.f35720d;
        }
        if (captionStyle.hasEdgeColor()) {
            i14 = captionStyle.edgeColor;
        } else {
            i14 = f35716g.f35721e;
        }
        return new b(i10, i11, i12, i13, i14, captionStyle.getTypeface());
    }
}
