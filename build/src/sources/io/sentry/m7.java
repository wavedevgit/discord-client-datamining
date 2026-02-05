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
    private static final List f29204u = Collections.unmodifiableList(Arrays.asList("Content-Type", "Content-Length", "Accept"));

    /* renamed from: a  reason: collision with root package name */
    private Double f29205a;

    /* renamed from: b  reason: collision with root package name */
    private Double f29206b;

    /* renamed from: m  reason: collision with root package name */
    private io.sentry.protocol.r f29217m;

    /* renamed from: s  reason: collision with root package name */
    private String[] f29223s;

    /* renamed from: t  reason: collision with root package name */
    private String[] f29224t;

    /* renamed from: c  reason: collision with root package name */
    private Set f29207c = new CopyOnWriteArraySet();

    /* renamed from: d  reason: collision with root package name */
    private Set f29208d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private String f29209e = null;

    /* renamed from: f  reason: collision with root package name */
    private String f29210f = null;

    /* renamed from: g  reason: collision with root package name */
    private a f29211g = a.MEDIUM;

    /* renamed from: h  reason: collision with root package name */
    private int f29212h = 1;

    /* renamed from: i  reason: collision with root package name */
    private long f29213i = 30000;

    /* renamed from: j  reason: collision with root package name */
    private long f29214j = 5000;

    /* renamed from: k  reason: collision with root package name */
    private long f29215k = LogThrottleSingleton.RATE_LIMIT_ONE_HOUR;

    /* renamed from: l  reason: collision with root package name */
    private boolean f29216l = true;

    /* renamed from: n  reason: collision with root package name */
    private boolean f29218n = false;

    /* renamed from: o  reason: collision with root package name */
    private n4 f29219o = n4.PIXEL_COPY;

    /* renamed from: p  reason: collision with root package name */
    private String[] f29220p = new String[0];

    /* renamed from: q  reason: collision with root package name */
    private String[] f29221q = new String[0];

    /* renamed from: r  reason: collision with root package name */
    private boolean f29222r = true;

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
        List list = f29204u;
        this.f29223s = (String[]) list.toArray(new String[0]);
        this.f29224t = (String[]) list.toArray(new String[0]);
        if (!z10) {
            C(true);
            B(true);
            this.f29207c.add("android.webkit.WebView");
            this.f29207c.add("android.widget.VideoView");
            this.f29207c.add("androidx.media3.ui.PlayerView");
            this.f29207c.add("com.google.android.exoplayer2.ui.PlayerView");
            this.f29207c.add("com.google.android.exoplayer2.ui.StyledPlayerView");
            this.f29217m = rVar;
        }
    }

    public static List i() {
        return f29204u;
    }

    private static String[] z(List list, List list2) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        linkedHashSet.addAll(list);
        linkedHashSet.addAll(list2);
        return (String[]) linkedHashSet.toArray(new String[0]);
    }

    public void A(boolean z10) {
        this.f29218n = z10;
    }

    public void B(boolean z10) {
        if (z10) {
            a("android.widget.ImageView");
            this.f29208d.remove("android.widget.ImageView");
            return;
        }
        b("android.widget.ImageView");
        this.f29207c.remove("android.widget.ImageView");
    }

    public void C(boolean z10) {
        if (z10) {
            a("android.widget.TextView");
            this.f29208d.remove("android.widget.TextView");
            return;
        }
        b("android.widget.TextView");
        this.f29207c.remove("android.widget.TextView");
    }

    public void D(String str) {
        a(str);
        this.f29209e = str;
    }

    public void E(boolean z10) {
        this.f29222r = z10;
    }

    public void F(String[] strArr) {
        this.f29220p = strArr;
    }

    public void G(String[] strArr) {
        this.f29221q = strArr;
    }

    public void H(List list) {
        this.f29223s = z(f29204u, list);
    }

    public void I(List list) {
        this.f29224t = z(f29204u, list);
    }

    public void J(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f29206b = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void K(a aVar) {
        this.f29211g = aVar;
    }

    public void L(n4 n4Var) {
        this.f29219o = n4Var;
    }

    public void M(io.sentry.protocol.r rVar) {
        this.f29217m = rVar;
    }

    public void N(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.f29205a = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void O(String str) {
        this.f29210f = str;
    }

    public void a(String str) {
        this.f29207c.add(str);
    }

    public void b(String str) {
        this.f29208d.add(str);
    }

    public long c() {
        return this.f29213i;
    }

    public int d() {
        return this.f29212h;
    }

    public Set e() {
        return this.f29207c;
    }

    public String f() {
        return this.f29209e;
    }

    public String[] g() {
        return this.f29220p;
    }

    public String[] h() {
        return this.f29221q;
    }

    public String[] j() {
        return this.f29223s;
    }

    public String[] k() {
        return this.f29224t;
    }

    public Double l() {
        return this.f29206b;
    }

    public a m() {
        return this.f29211g;
    }

    public n4 n() {
        return this.f29219o;
    }

    public io.sentry.protocol.r o() {
        return this.f29217m;
    }

    public long p() {
        return this.f29215k;
    }

    public Double q() {
        return this.f29205a;
    }

    public long r() {
        return this.f29214j;
    }

    public Set s() {
        return this.f29208d;
    }

    public String t() {
        return this.f29210f;
    }

    public boolean u() {
        return this.f29218n;
    }

    public boolean v() {
        return this.f29222r;
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
        return this.f29216l;
    }
}
