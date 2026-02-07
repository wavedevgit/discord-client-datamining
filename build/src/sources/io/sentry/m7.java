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
    private static final List f28396u = Collections.unmodifiableList(Arrays.asList("Content-Type", "Content-Length", "Accept"));

    /* renamed from: a  reason: collision with root package name */
    private Double f28397a;

    /* renamed from: b  reason: collision with root package name */
    private Double f28398b;

    /* renamed from: m  reason: collision with root package name */
    private io.sentry.protocol.r f28409m;

    /* renamed from: s  reason: collision with root package name */
    private String[] f28415s;

    /* renamed from: t  reason: collision with root package name */
    private String[] f28416t;

    /* renamed from: c  reason: collision with root package name */
    private Set f28399c = new CopyOnWriteArraySet();

    /* renamed from: d  reason: collision with root package name */
    private Set f28400d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private String f28401e = null;

    /* renamed from: f  reason: collision with root package name */
    private String f28402f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f28403g = a.MEDIUM;

    /* renamed from: h  reason: collision with root package name */
    private int f28404h = 1;

    /* renamed from: i  reason: collision with root package name */
    private long f28405i = 30000;

    /* renamed from: j  reason: collision with root package name */
    private long f28406j = 5000;

    /* renamed from: k  reason: collision with root package name */
    private long f28407k = LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;

    /* renamed from: l  reason: collision with root package name */
    private boolean f28408l = true;

    /* renamed from: n  reason: collision with root package name */
    private boolean f28410n = false;

    /* renamed from: o  reason: collision with root package name */
    private n4 f28411o = n4.PIXEL_COPY;

    /* renamed from: p  reason: collision with root package name */
    private String[] f28412p = new String[0];

    /* renamed from: q  reason: collision with root package name */
    private String[] f28413q = new String[0];

    /* renamed from: r  reason: collision with root package name */
    private boolean f28414r = true;

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
        List list = f28396u;
        this.f28415s = (String[]) list.toArray(new String[0]);
        this.f28416t = (String[]) list.toArray(new String[0]);
        if (!z10) {
            C(true);
            B(true);
            this.f28399c.add("android.webkit.WebView");
            this.f28399c.add("android.widget.VideoView");
            this.f28399c.add("androidx.media3.ui.PlayerView");
            this.f28399c.add("com.google.android.exoplayer2.ui.PlayerView");
            this.f28399c.add("com.google.android.exoplayer2.ui.StyledPlayerView");
            this.f28409m = rVar;
        }
    }

    public static List i() {
        return f28396u;
    }

    private static String[] z(List list, List list2) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.addAll(list);
        linkedHashSet.addAll(list2);
        return (String[]) linkedHashSet.toArray(new String[0]);
    }

    public void A(boolean z10) {
        this.f28410n = z10;
    }

    public void B(boolean z10) {
        if (z10) {
            a("android.widget.ImageView");
            this.f28400d.remove("android.widget.ImageView");
            return;
        }
        b("android.widget.ImageView");
        this.f28399c.remove("android.widget.ImageView");
    }

    public void C(boolean z10) {
        if (z10) {
            a("android.widget.TextView");
            this.f28400d.remove("android.widget.TextView");
            return;
        }
        b("android.widget.TextView");
        this.f28399c.remove("android.widget.TextView");
    }

    public void D(String str) {
        a(str);
        this.f28401e = str;
    }

    public void E(boolean z10) {
        this.f28414r = z10;
    }

    public void F(String[] strArr) {
        this.f28412p = strArr;
    }

    public void G(String[] strArr) {
        this.f28413q = strArr;
    }

    public void H(List list) {
        this.f28415s = z(f28396u, list);
    }

    public void I(List list) {
        this.f28416t = z(f28396u, list);
    }

    public void J(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f28398b = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void K(a aVar) {
        this.f28403g = aVar;
    }

    public void L(n4 n4Var) {
        this.f28411o = n4Var;
    }

    public void M(io.sentry.protocol.r rVar) {
        this.f28409m = rVar;
    }

    public void N(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f28397a = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void O(String str) {
        this.f28402f = str;
    }

    public void a(String str) {
        this.f28399c.add(str);
    }

    public void b(String str) {
        this.f28400d.add(str);
    }

    public long c() {
        return this.f28405i;
    }

    public int d() {
        return this.f28404h;
    }

    public Set e() {
        return this.f28399c;
    }

    public String f() {
        return this.f28401e;
    }

    public String[] g() {
        return this.f28412p;
    }

    public String[] h() {
        return this.f28413q;
    }

    public String[] j() {
        return this.f28415s;
    }

    public String[] k() {
        return this.f28416t;
    }

    public Double l() {
        return this.f28398b;
    }

    public a m() {
        return this.f28403g;
    }

    public n4 n() {
        return this.f28411o;
    }

    public io.sentry.protocol.r o() {
        return this.f28409m;
    }

    public long p() {
        return this.f28407k;
    }

    public Double q() {
        return this.f28397a;
    }

    public long r() {
        return this.f28406j;
    }

    public Set s() {
        return this.f28400d;
    }

    public String t() {
        return this.f28402f;
    }

    public boolean u() {
        return this.f28410n;
    }

    public boolean v() {
        return this.f28414r;
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
        return this.f28408l;
    }
}
