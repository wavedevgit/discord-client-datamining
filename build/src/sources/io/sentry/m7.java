package io.sentry;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m7 {

    /* renamed from: u  reason: collision with root package name */
    private static final List f30146u = Collections.unmodifiableList(Arrays.asList("Content-Type", "Content-Length", "Accept"));

    /* renamed from: a  reason: collision with root package name */
    private Double f30147a;

    /* renamed from: b  reason: collision with root package name */
    private Double f30148b;

    /* renamed from: m  reason: collision with root package name */
    private io.sentry.protocol.r f30159m;

    /* renamed from: s  reason: collision with root package name */
    private String[] f30165s;

    /* renamed from: t  reason: collision with root package name */
    private String[] f30166t;

    /* renamed from: c  reason: collision with root package name */
    private Set f30149c = new CopyOnWriteArraySet();

    /* renamed from: d  reason: collision with root package name */
    private Set f30150d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private String f30151e = null;

    /* renamed from: f  reason: collision with root package name */
    private String f30152f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f30153g = a.MEDIUM;

    /* renamed from: h  reason: collision with root package name */
    private int f30154h = 1;

    /* renamed from: i  reason: collision with root package name */
    private long f30155i = 30000;

    /* renamed from: j  reason: collision with root package name */
    private long f30156j = 5000;

    /* renamed from: k  reason: collision with root package name */
    private long f30157k = LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;

    /* renamed from: l  reason: collision with root package name */
    private boolean f30158l = true;

    /* renamed from: n  reason: collision with root package name */
    private boolean f30160n = false;

    /* renamed from: o  reason: collision with root package name */
    private n4 f30161o = n4.PIXEL_COPY;

    /* renamed from: p  reason: collision with root package name */
    private String[] f30162p = new String[0];

    /* renamed from: q  reason: collision with root package name */
    private String[] f30163q = new String[0];

    /* renamed from: r  reason: collision with root package name */
    private boolean f30164r = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        LOW(0.8f, 50000, 10),
        MEDIUM(1.0f, 75000, 30),
        HIGH(1.0f, 100000, 50);
        
        public final int bitRate;
        public final int screenshotQuality;
        public final float sizeScale;

        a(float f10, int i10, int i11) {
            this.sizeScale = f10;
            this.bitRate = i10;
            this.screenshotQuality = i11;
        }

        @NotNull
        public String serializedName() {
            return name().toLowerCase(Locale.ROOT);
        }
    }

    public m7(boolean z10, io.sentry.protocol.r rVar) {
        List list = f30146u;
        this.f30165s = (String[]) list.toArray(new String[0]);
        this.f30166t = (String[]) list.toArray(new String[0]);
        if (!z10) {
            C(true);
            B(true);
            this.f30149c.add("android.webkit.WebView");
            this.f30149c.add("android.widget.VideoView");
            this.f30149c.add("androidx.media3.ui.PlayerView");
            this.f30149c.add("com.google.android.exoplayer2.ui.PlayerView");
            this.f30149c.add("com.google.android.exoplayer2.ui.StyledPlayerView");
            this.f30159m = rVar;
        }
    }

    public static List i() {
        return f30146u;
    }

    private static String[] z(List list, List list2) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.addAll(list);
        linkedHashSet.addAll(list2);
        return (String[]) linkedHashSet.toArray(new String[0]);
    }

    public void A(boolean z10) {
        this.f30160n = z10;
    }

    public void B(boolean z10) {
        if (z10) {
            a("android.widget.ImageView");
            this.f30150d.remove("android.widget.ImageView");
            return;
        }
        b("android.widget.ImageView");
        this.f30149c.remove("android.widget.ImageView");
    }

    public void C(boolean z10) {
        if (z10) {
            a("android.widget.TextView");
            this.f30150d.remove("android.widget.TextView");
            return;
        }
        b("android.widget.TextView");
        this.f30149c.remove("android.widget.TextView");
    }

    public void D(String str) {
        a(str);
        this.f30151e = str;
    }

    public void E(boolean z10) {
        this.f30164r = z10;
    }

    public void F(String[] strArr) {
        this.f30162p = strArr;
    }

    public void G(String[] strArr) {
        this.f30163q = strArr;
    }

    public void H(List list) {
        this.f30165s = z(f30146u, list);
    }

    public void I(List list) {
        this.f30166t = z(f30146u, list);
    }

    public void J(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f30148b = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void K(a aVar) {
        this.f30153g = aVar;
    }

    public void L(n4 n4Var) {
        this.f30161o = n4Var;
    }

    public void M(io.sentry.protocol.r rVar) {
        this.f30159m = rVar;
    }

    public void N(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f30147a = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void O(String str) {
        this.f30152f = str;
    }

    public void a(String str) {
        this.f30149c.add(str);
    }

    public void b(String str) {
        this.f30150d.add(str);
    }

    public long c() {
        return this.f30155i;
    }

    public int d() {
        return this.f30154h;
    }

    public Set e() {
        return this.f30149c;
    }

    public String f() {
        return this.f30151e;
    }

    public String[] g() {
        return this.f30162p;
    }

    public String[] h() {
        return this.f30163q;
    }

    public String[] j() {
        return this.f30165s;
    }

    public String[] k() {
        return this.f30166t;
    }

    public Double l() {
        return this.f30148b;
    }

    public a m() {
        return this.f30153g;
    }

    public n4 n() {
        return this.f30161o;
    }

    public io.sentry.protocol.r o() {
        return this.f30159m;
    }

    public long p() {
        return this.f30157k;
    }

    public Double q() {
        return this.f30147a;
    }

    public long r() {
        return this.f30156j;
    }

    public Set s() {
        return this.f30150d;
    }

    public String t() {
        return this.f30152f;
    }

    public boolean u() {
        return this.f30160n;
    }

    public boolean v() {
        return this.f30164r;
    }

    public boolean w() {
        if (q() != null && q().doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean x() {
        if (l() != null && l().doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean y() {
        return this.f30158l;
    }
}
