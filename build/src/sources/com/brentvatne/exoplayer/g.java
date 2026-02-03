package com.brentvatne.exoplayer;

import android.app.Activity;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.accessibility.CaptioningManager;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.j;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.source.dash.DashMediaSource;
import com.google.android.exoplayer2.source.dash.c;
import com.google.android.exoplayer2.source.hls.HlsMediaSource;
import com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
import com.google.android.exoplayer2.source.smoothstreaming.a;
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
import com.google.android.exoplayer2.trackselection.MappingTrackSelector;
import com.google.android.exoplayer2.trackselection.a;
import com.google.android.exoplayer2.ui.PlayerControlView;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.g;
import fd.r;
import fd.y;
import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.CookiePolicy;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import lc.e;
import le.e;
import le.p;
import le.r;
import org.webrtc.MediaStreamTrack;
import qd.a0;
import qd.h0;
import qd.r;
import qd.r0;
import qd.u0;
import qd.w0;
import rc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class g extends FrameLayout implements LifecycleEventListener, Player.b, e.a, e6.b, AudioManager.OnAudioFocusChangeListener, gd.d, u {

    /* renamed from: q0  reason: collision with root package name */
    private static final CookieManager f8973q0;
    private boolean A;
    private boolean B;
    private boolean C;
    private boolean D;
    private boolean E;
    private float F;
    private float G;
    private int H;
    private int I;
    private boolean J;
    private int K;
    private int L;
    private int M;
    private int N;
    private Handler O;
    private Uri P;
    private String Q;
    private boolean R;
    private String S;
    private Dynamic T;
    private String U;
    private Dynamic V;
    private String W;

    /* renamed from: a0  reason: collision with root package name */
    private Dynamic f8974a0;

    /* renamed from: b0  reason: collision with root package name */
    private ReadableArray f8975b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f8976c0;

    /* renamed from: d  reason: collision with root package name */
    private final com.brentvatne.exoplayer.i f8977d;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f8978d0;

    /* renamed from: e  reason: collision with root package name */
    private final com.brentvatne.exoplayer.f f8979e;

    /* renamed from: e0  reason: collision with root package name */
    private float f8980e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f8981f0;

    /* renamed from: g0  reason: collision with root package name */
    private Map f8982g0;

    /* renamed from: h0  reason: collision with root package name */
    private boolean f8983h0;

    /* renamed from: i  reason: collision with root package name */
    private final r f8984i;

    /* renamed from: i0  reason: collision with root package name */
    private UUID f8985i0;

    /* renamed from: j0  reason: collision with root package name */
    private String f8986j0;

    /* renamed from: k0  reason: collision with root package name */
    private String[] f8987k0;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f8988l0;

    /* renamed from: m0  reason: collision with root package name */
    private final ThemedReactContext f8989m0;

    /* renamed from: n0  reason: collision with root package name */
    private final AudioManager f8990n0;

    /* renamed from: o  reason: collision with root package name */
    private PlayerControlView f8991o;

    /* renamed from: o0  reason: collision with root package name */
    private final e6.a f8992o0;

    /* renamed from: p  reason: collision with root package name */
    private View f8993p;

    /* renamed from: p0  reason: collision with root package name */
    private final Handler f8994p0;

    /* renamed from: q  reason: collision with root package name */
    private Player.b f8995q;

    /* renamed from: r  reason: collision with root package name */
    private com.brentvatne.exoplayer.d f8996r;

    /* renamed from: s  reason: collision with root package name */
    private DataSource.Factory f8997s;

    /* renamed from: t  reason: collision with root package name */
    private SimpleExoPlayer f8998t;

    /* renamed from: u  reason: collision with root package name */
    private DefaultTrackSelector f8999u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f9000v;

    /* renamed from: w  reason: collision with root package name */
    private int f9001w;

    /* renamed from: x  reason: collision with root package name */
    private long f9002x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f9003y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f9004z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends Handler {
        a() {
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            if (message.what == 1 && g.this.f8998t != null && g.this.f8998t.O() == 3 && g.this.f8998t.B()) {
                long Z = g.this.f8998t.Z();
                g.this.f8977d.o(Z, (g.this.f8998t.c0() * g.this.f8998t.getDuration()) / 100, g.this.f8998t.getDuration(), g.this.B0(Z));
                sendMessageDelayed(obtainMessage(1), Math.round(g.this.f8980e0));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements View.OnClickListener {
        b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            g.this.w1();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements View.OnClickListener {
        c() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            if (g.this.f8998t != null && g.this.f8998t.O() == 4) {
                g.this.f8998t.l0(0L);
            }
            g.this.b1(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements View.OnClickListener {
        d() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            g.this.b1(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Player.b {
        e() {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlaybackStateChanged(int i10) {
            g gVar = g.this;
            gVar.L0(gVar.f8993p);
            g.this.f8998t.h(g.this.f8995q);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f9010d;

        f(g gVar) {
            this.f9010d = gVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            int i10;
            g gVar;
            if (g.this.f8998t == null) {
                g.this.f8999u = new DefaultTrackSelector(DefaultTrackSelector.d.E0, new a.b());
                DefaultTrackSelector defaultTrackSelector = g.this.f8999u;
                DefaultTrackSelector.d.a E = g.this.f8999u.E();
                if (g.this.I != 0) {
                    i10 = g.this.I;
                } else {
                    i10 = Integer.MAX_VALUE;
                }
                defaultTrackSelector.a0(E.t0(i10));
                p pVar = new p(true, 65536);
                e.a aVar = new e.a();
                aVar.b(pVar);
                aVar.c(g.this.K, g.this.L, g.this.M, g.this.N);
                aVar.e(-1);
                aVar.d(true);
                lc.e a10 = aVar.a();
                lc.f l10 = new lc.f(g.this.getContext()).l(0);
                g gVar2 = g.this;
                gVar2.f8998t = new SimpleExoPlayer.a(gVar2.getContext(), l10).d(g.this.f8999u).b(g.this.f8984i).c(a10).a();
                g.this.f8998t.L(this.f9010d);
                g.this.f8996r.setPlayer(g.this.f8998t);
                g.this.f8992o0.b(this.f9010d);
                g.this.f8984i.b(new Handler(), this.f9010d);
                g.this.d1(!gVar.B);
                g.this.f9000v = true;
                g.this.f8998t.D0(new PlaybackParameters(g.this.F, 1.0f));
            }
            if (g.this.f9000v && g.this.P != null) {
                g.this.f8996r.g();
                ArrayList t02 = g.this.t0();
                g gVar3 = g.this;
                qd.r r02 = gVar3.r0(gVar3.P, g.this.Q);
                if (t02.size() != 0) {
                    t02.add(0, r02);
                    r02 = new a0((qd.r[]) t02.toArray(new qd.r[t02.size()]));
                }
                if (g.this.f9001w != -1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (z10) {
                    g.this.f8998t.z(g.this.f9001w, g.this.f9002x);
                }
                g.this.f8998t.A0(r02, !z10, false);
                g.this.f9000v = false;
                g gVar4 = g.this;
                gVar4.L0(gVar4.f8996r);
                g.this.f8977d.m();
                g.this.f9003y = true;
            }
            g.this.G0();
            g gVar5 = g.this;
            gVar5.R0(gVar5.f8988l0);
            g.this.p0();
        }
    }

    /* renamed from: com.brentvatne.exoplayer.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class RunnableC0146g implements Runnable {
        RunnableC0146g() {
        }

        @Override // java.lang.Runnable
        public void run() {
            g.this.K0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h implements Runnable {
        h() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (g.this.f8998t != null) {
                g.this.f8998t.F0(g.this.G * 0.8f);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class i implements Runnable {
        i() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (g.this.f8998t != null) {
                g.this.f8998t.F0(g.this.G * 1.0f);
            }
        }
    }

    static {
        CookieManager cookieManager = new CookieManager();
        f8973q0 = cookieManager;
        cookieManager.setCookiePolicy(CookiePolicy.ACCEPT_ORIGINAL_SERVER);
    }

    public g(ThemedReactContext themedReactContext, com.brentvatne.exoplayer.f fVar) {
        super(themedReactContext);
        this.D = false;
        this.E = false;
        this.F = 1.0f;
        this.G = 1.0f;
        this.H = 3;
        this.I = 0;
        this.J = false;
        this.K = 50000;
        this.L = 50000;
        this.M = 2500;
        this.N = 5000;
        this.f8978d0 = true;
        this.f8980e0 = 250.0f;
        this.f8981f0 = false;
        this.f8983h0 = false;
        this.f8985i0 = null;
        this.f8986j0 = null;
        this.f8987k0 = null;
        this.f8994p0 = new a();
        this.f8989m0 = themedReactContext;
        this.f8977d = new com.brentvatne.exoplayer.i(themedReactContext);
        this.f8979e = fVar;
        this.f8984i = fVar.b();
        y0();
        this.f8990n0 = (AudioManager) themedReactContext.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND);
        themedReactContext.addLifecycleEventListener(this);
        this.f8992o0 = new e6.a(themedReactContext);
    }

    private int A0(w0 w0Var) {
        if (w0Var.f47630d == 0) {
            return -1;
        }
        String language = Locale.getDefault().getLanguage();
        String iSO3Language = Locale.getDefault().getISO3Language();
        for (int i10 = 0; i10 < w0Var.f47630d; i10++) {
            String str = w0Var.b(i10).c(0).f12326i;
            if (str != null && (str.equals(language) || str.equals(iSO3Language))) {
                return i10;
            }
        }
        return 0;
    }

    private WritableArray C0() {
        WritableArray createArray = Arguments.createArray();
        MappingTrackSelector.MappedTrackInfo m10 = this.f8999u.m();
        int D0 = D0(3);
        if (m10 != null && D0 != -1) {
            w0 f10 = m10.f(D0);
            for (int i10 = 0; i10 < f10.f47630d; i10++) {
                Format c10 = f10.b(i10).c(0);
                WritableMap createMap = Arguments.createMap();
                createMap.putInt("index", i10);
                String str = c10.f12324d;
                String str2 = "";
                if (str == null) {
                    str = "";
                }
                createMap.putString("title", str);
                createMap.putString("type", c10.f12335w);
                String str3 = c10.f12326i;
                if (str3 != null) {
                    str2 = str3;
                }
                createMap.putString("language", str2);
                createArray.pushMap(createMap);
            }
        }
        return createArray;
    }

    private WritableArray E0() {
        WritableArray createArray = Arguments.createArray();
        MappingTrackSelector.MappedTrackInfo m10 = this.f8999u.m();
        int D0 = D0(2);
        if (m10 != null && D0 != -1) {
            w0 f10 = m10.f(D0);
            for (int i10 = 0; i10 < f10.f47630d; i10++) {
                u0 b10 = f10.b(i10);
                for (int i11 = 0; i11 < b10.f47614d; i11++) {
                    Format c10 = b10.c(i11);
                    WritableMap createMap = Arguments.createMap();
                    int i12 = c10.B;
                    if (i12 == -1) {
                        i12 = 0;
                    }
                    createMap.putInt("width", i12);
                    int i13 = c10.C;
                    if (i13 == -1) {
                        i13 = 0;
                    }
                    createMap.putInt("height", i13);
                    int i14 = c10.f12331s;
                    if (i14 == -1) {
                        i14 = 0;
                    }
                    createMap.putInt("bitrate", i14);
                    String str = c10.f12332t;
                    if (str == null) {
                        str = "";
                    }
                    createMap.putString("codecs", str);
                    String str2 = c10.f12324d;
                    if (str2 == null) {
                        str2 = String.valueOf(i11);
                    }
                    createMap.putString("trackId", str2);
                    createArray.pushMap(createMap);
                }
            }
        }
        return createArray;
    }

    private void F0() {
        new Handler().postDelayed(new f(this), 1L);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G0() {
        if (this.f8991o == null) {
            this.f8991o = new PlayerControlView(getContext());
        }
        this.f8991o.setPlayer(this.f8998t);
        this.f8991o.J();
        this.f8993p = this.f8991o.findViewById(d6.a.f21247c);
        this.f8996r.setOnClickListener(new b());
        ((ImageButton) this.f8991o.findViewById(d6.a.f21246b)).setOnClickListener(new c());
        ((ImageButton) this.f8991o.findViewById(d6.a.f21245a)).setOnClickListener(new d());
        e eVar = new e();
        this.f8995q = eVar;
        this.f8998t.L(eVar);
    }

    private static boolean H0(j jVar) {
        Log.e("ExoPlayer Exception", jVar.toString());
        if (jVar.f13251t != 0) {
            return false;
        }
        for (Throwable l10 = jVar.l(); l10 != null; l10 = l10.getCause()) {
            if ((l10 instanceof qd.b) || (l10 instanceof g.d)) {
                return true;
            }
        }
        return false;
    }

    private void I0(boolean z10) {
        if (this.C == z10) {
            return;
        }
        this.C = z10;
        if (z10) {
            this.f8977d.d(true);
        } else {
            this.f8977d.d(false);
        }
    }

    private void J0() {
        if (this.f9004z) {
            W0(false);
        }
        this.f8990n0.abandonAudioFocus(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void K0() {
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null && simpleExoPlayer.B()) {
            d1(false);
        }
        setKeepScreenOn(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void L0(View view) {
        if (view == null) {
            return;
        }
        view.measure(View.MeasureSpec.makeMeasureSpec(getMeasuredWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(getMeasuredHeight(), 1073741824));
        view.layout(view.getLeft(), view.getTop(), view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void M0() {
        if (this.f8998t != null) {
            x1();
            try {
                this.f8998t.G0();
                this.f8998t.B0();
            } catch (Exception unused) {
            }
            this.f8998t.h(this);
            this.f8999u = null;
            this.f8998t = null;
        }
        this.f8994p0.removeMessages(1);
        this.f8989m0.removeLifecycleEventListener(this);
        this.f8992o0.a();
        this.f8984i.a(this);
    }

    private void N0() {
        this.f9000v = true;
        F0();
    }

    private boolean O0() {
        if (this.f8976c0 || this.P == null || this.E || this.f8990n0.requestAudioFocus(this, 3, 1) == 1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d1(boolean z10) {
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            if (z10) {
                boolean O0 = O0();
                this.E = O0;
                if (O0) {
                    this.f8998t.n(true);
                    return;
                }
                return;
            }
            simpleExoPlayer.n(false);
        }
    }

    private void o0() {
        if (this.f8998t == null) {
            return;
        }
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        this.f8991o.setLayoutParams(layoutParams);
        int indexOfChild = indexOfChild(this.f8991o);
        if (indexOfChild != -1) {
            removeViewAt(indexOfChild);
        }
        addView(this.f8991o, 1, layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p0() {
        i1(this.R);
        a1(this.D);
    }

    private DataSource.Factory q0(boolean z10) {
        r rVar;
        ThemedReactContext themedReactContext = this.f8989m0;
        if (z10) {
            rVar = this.f8984i;
        } else {
            rVar = null;
        }
        return com.brentvatne.exoplayer.b.c(themedReactContext, rVar, this.f8982g0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public qd.r r0(Uri uri, String str) {
        String lastPathSegment;
        MediaItem a10 = new MediaItem.c().e(uri).a();
        if (!TextUtils.isEmpty(str)) {
            lastPathSegment = "." + str;
        } else {
            lastPathSegment = uri.getLastPathSegment();
        }
        int x02 = ne.w0.x0(lastPathSegment);
        if (x02 != 0) {
            if (x02 != 1) {
                if (x02 != 2) {
                    if (x02 == 4) {
                        return new h0.b(this.f8997s).c(this.f8979e.a(this.H)).b(a10);
                    }
                    throw new IllegalStateException("Unsupported type: " + x02);
                }
                return new HlsMediaSource.Factory(this.f8997s).b(this.f8979e.a(this.H)).a(a10);
            }
            return new SsMediaSource.Factory(new a.C0174a(this.f8997s), q0(false)).b(this.f8979e.a(this.H)).a(a10);
        }
        return new DashMediaSource.Factory(new c.a(this.f8997s), q0(false)).b(this.f8979e.a(this.H)).a(a10);
    }

    private qd.r s0(String str, Uri uri, String str2, String str3) {
        return new r0.b(this.f8997s).a(new MediaItem.k.a(uri).n(str2).m(str3).p(-1).o(-1).l(str).i(), -9223372036854775807L);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ArrayList t0() {
        String str;
        ArrayList arrayList = new ArrayList();
        if (this.f8975b0 != null) {
            for (int i10 = 0; i10 < this.f8975b0.size(); i10++) {
                ReadableMap map = this.f8975b0.getMap(i10);
                String string = map.getString("language");
                if (map.hasKey("title")) {
                    str = map.getString("title");
                } else {
                    str = string + " " + i10;
                }
                qd.r s02 = s0(str, Uri.parse(map.getString("uri")), map.getString("type"), string);
                if (s02 != null) {
                    arrayList.add(s02);
                }
            }
        }
        return arrayList;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0012, code lost:
        if (r0 != 4) goto L11;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void t1() {
        /*
            r3 = this;
            com.google.android.exoplayer2.SimpleExoPlayer r0 = r3.f8998t
            if (r0 == 0) goto L25
            int r0 = r0.O()
            r1 = 1
            if (r0 == r1) goto L21
            r2 = 2
            if (r0 == r2) goto L15
            r2 = 3
            if (r0 == r2) goto L15
            r1 = 4
            if (r0 == r1) goto L21
            goto L28
        L15:
            com.google.android.exoplayer2.SimpleExoPlayer r0 = r3.f8998t
            boolean r0 = r0.B()
            if (r0 != 0) goto L28
            r3.d1(r1)
            goto L28
        L21:
            r3.F0()
            goto L28
        L25:
            r3.F0()
        L28:
            boolean r0 = r3.f8976c0
            if (r0 != 0) goto L31
            boolean r0 = r3.f8978d0
            r3.setKeepScreenOn(r0)
        L31:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.brentvatne.exoplayer.g.t1():void");
    }

    private void u1() {
        this.f8994p0.sendEmptyMessage(1);
    }

    private void v0() {
        this.f8994p0.removeMessages(1);
    }

    private void v1() {
        J0();
        M0();
    }

    private void w0() {
        this.f9001w = -1;
        this.f9002x = -9223372036854775807L;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void w1() {
        if (this.f8998t == null) {
            return;
        }
        L0(this.f8991o);
        if (this.f8991o.D()) {
            this.f8991o.A();
        } else {
            this.f8991o.J();
        }
    }

    private void x1() {
        long j10;
        this.f9001w = this.f8998t.e0();
        if (this.f8998t.i0()) {
            j10 = Math.max(0L, this.f8998t.Z());
        } else {
            j10 = -9223372036854775807L;
        }
        this.f9002x = j10;
    }

    private void y0() {
        w0();
        this.f8997s = q0(true);
        CookieHandler cookieHandler = CookieHandler.getDefault();
        CookieManager cookieManager = f8973q0;
        if (cookieHandler != cookieManager) {
            CookieHandler.setDefault(cookieManager);
        }
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        com.brentvatne.exoplayer.d dVar = new com.brentvatne.exoplayer.d(getContext());
        this.f8996r = dVar;
        dVar.setLayoutParams(layoutParams);
        addView(this.f8996r, 0, layoutParams);
        this.O = new Handler();
    }

    private void y1() {
        int i10;
        String str;
        if (this.f9003y) {
            int i11 = 0;
            this.f9003y = false;
            l1(this.S, this.T);
            o1(this.U, this.V);
            m1(this.W, this.f8974a0);
            Format y02 = this.f8998t.y0();
            if (y02 != null) {
                i10 = y02.B;
            } else {
                i10 = 0;
            }
            if (y02 != null) {
                i11 = y02.C;
            }
            int i12 = i11;
            if (y02 != null) {
                str = y02.f12324d;
            } else {
                str = "-1";
            }
            this.f8977d.l(this.f8998t.getDuration(), this.f8998t.Z(), i10, i12, z0(), C0(), E0(), str);
        }
    }

    private WritableArray z0() {
        WritableArray createArray = Arguments.createArray();
        MappingTrackSelector.MappedTrackInfo m10 = this.f8999u.m();
        int D0 = D0(1);
        if (m10 != null && D0 != -1) {
            w0 f10 = m10.f(D0);
            for (int i10 = 0; i10 < f10.f47630d; i10++) {
                Format c10 = f10.b(i10).c(0);
                WritableMap createMap = Arguments.createMap();
                createMap.putInt("index", i10);
                String str = c10.f12324d;
                String str2 = "";
                if (str == null) {
                    str = "";
                }
                createMap.putString("title", str);
                createMap.putString("type", c10.f12335w);
                String str3 = c10.f12326i;
                if (str3 == null) {
                    str3 = "";
                }
                createMap.putString("language", str3);
                int i11 = c10.f12331s;
                if (i11 != -1) {
                    str2 = String.format(Locale.US, "%.2fMbps", Float.valueOf(i11 / 1000000.0f));
                }
                createMap.putString("bitrate", str2);
                createArray.pushMap(createMap);
            }
        }
        return createArray;
    }

    @Override // rc.u
    public void A(int i10, r.b bVar) {
        Log.d("DRM Info", "onDrmKeysLoaded");
    }

    public double B0(long j10) {
        Timeline.d dVar = new Timeline.d();
        if (!this.f8998t.v().u()) {
            this.f8998t.v().r(this.f8998t.e0(), dVar);
        }
        return dVar.f12639q + j10;
    }

    public int D0(int i10) {
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            int v02 = simpleExoPlayer.v0();
            for (int i11 = 0; i11 < v02; i11++) {
                if (this.f8998t.w0(i11) == i10) {
                    return i11;
                }
            }
            return -1;
        }
        return -1;
    }

    @Override // rc.u
    public void I(int i10, r.b bVar, Exception exc) {
        Log.d("DRM Info", "onDrmSessionManagerError");
        this.f8977d.f("onDrmSessionManagerError", exc);
    }

    public void P0(long j10) {
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            simpleExoPlayer.l0(j10);
        }
    }

    public void Q0(int i10, int i11, int i12, int i13) {
        this.K = i10;
        this.L = i11;
        this.M = i12;
        this.N = i13;
        M0();
        F0();
    }

    public void R0(boolean z10) {
        this.f8988l0 = z10;
        if (this.f8998t != null && this.f8996r != null) {
            if (z10) {
                o0();
                return;
            }
            int indexOfChild = indexOfChild(this.f8991o);
            if (indexOfChild != -1) {
                removeViewAt(indexOfChild);
            }
        }
    }

    public void S0(boolean z10) {
        this.f8976c0 = z10;
    }

    public void T0(String[] strArr) {
        this.f8987k0 = strArr;
    }

    public void U0(String str) {
        this.f8986j0 = str;
    }

    public void V0(UUID uuid) {
        this.f8985i0 = uuid;
    }

    public void W0(boolean z10) {
        int i10;
        if (z10 != this.f9004z) {
            this.f9004z = z10;
            Activity currentActivity = this.f8989m0.getCurrentActivity();
            if (currentActivity == null) {
                return;
            }
            View decorView = currentActivity.getWindow().getDecorView();
            if (this.f9004z) {
                if (ne.w0.f40158a >= 19) {
                    i10 = 4102;
                } else {
                    i10 = 6;
                }
                this.f8977d.j();
                decorView.setSystemUiVisibility(i10);
                this.f8977d.h();
                return;
            }
            this.f8977d.i();
            decorView.setSystemUiVisibility(0);
            this.f8977d.g();
        }
    }

    public void X0(boolean z10) {
        this.f8996r.setHideShutterView(z10);
    }

    public void Y0(int i10) {
        this.I = i10;
        if (this.f8998t != null) {
            DefaultTrackSelector defaultTrackSelector = this.f8999u;
            DefaultTrackSelector.d.a E = defaultTrackSelector.E();
            int i11 = this.I;
            if (i11 == 0) {
                i11 = Integer.MAX_VALUE;
            }
            defaultTrackSelector.a0(E.t0(i11));
        }
    }

    public void Z0(int i10) {
        this.H = i10;
        M0();
        F0();
    }

    public void a1(boolean z10) {
        float f10;
        this.D = z10;
        if (z10) {
            f10 = 0.0f;
        } else {
            f10 = 1.0f;
        }
        this.G = f10;
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            simpleExoPlayer.F0(f10);
        }
    }

    public void b1(boolean z10) {
        this.B = z10;
        if (this.f8998t != null) {
            if (!z10) {
                t1();
            } else {
                K0();
            }
        }
    }

    public void c1(boolean z10) {
        this.f8981f0 = z10;
    }

    public void e1(boolean z10) {
        this.f8978d0 = z10;
    }

    public void f1(float f10) {
        this.f8980e0 = f10;
    }

    @Override // e6.b
    public void g() {
        this.f8977d.a();
    }

    public void g1(float f10) {
        this.F = f10;
        if (this.f8998t != null) {
            this.f8998t.D0(new PlaybackParameters(this.F, 1.0f));
        }
    }

    public void h1(Uri uri, String str) {
        if (uri != null) {
            boolean equals = uri.equals(this.P);
            this.P = uri;
            this.Q = str;
            this.f8997s = q0(true);
            if (!equals) {
                N0();
            }
        }
    }

    public void i1(boolean z10) {
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            if (z10) {
                simpleExoPlayer.R(1);
            } else {
                simpleExoPlayer.R(0);
            }
        }
        this.R = z10;
    }

    public void j1(boolean z10) {
        this.f8983h0 = z10;
    }

    public void k1(int i10) {
        this.f8996r.setResizeMode(i10);
    }

    public void l1(String str, Dynamic dynamic) {
        this.S = str;
        this.T = dynamic;
        n1(1, str, dynamic);
    }

    public void m1(String str, Dynamic dynamic) {
        this.W = str;
        this.f8974a0 = dynamic;
        n1(3, str, dynamic);
    }

    public void n1(int i10, String str, Dynamic dynamic) {
        int D0;
        MappingTrackSelector.MappedTrackInfo m10;
        int A0;
        if (this.f8998t == null || (D0 = D0(i10)) == -1 || (m10 = this.f8999u.m()) == null) {
            return;
        }
        w0 f10 = m10.f(D0);
        int[] iArr = {0};
        if (TextUtils.isEmpty(str)) {
            str = "default";
        }
        DefaultTrackSelector.d A = this.f8999u.J().H().v0(D0, true).A();
        if (str.equals("disabled")) {
            this.f8999u.b0(A);
            return;
        }
        if (str.equals("language")) {
            A0 = 0;
            while (A0 < f10.f47630d) {
                String str2 = f10.b(A0).c(0).f12326i;
                if (str2 != null && str2.equals(dynamic.asString())) {
                    break;
                }
                A0++;
            }
            A0 = -1;
        } else if (str.equals("title")) {
            A0 = 0;
            while (A0 < f10.f47630d) {
                String str3 = f10.b(A0).c(0).f12324d;
                if (str3 != null && str3.equals(dynamic.asString())) {
                    break;
                }
                A0++;
            }
            A0 = -1;
        } else if (str.equals("index")) {
            if (dynamic.asInt() < f10.f47630d) {
                A0 = dynamic.asInt();
            }
            A0 = -1;
        } else if (str.equals("resolution")) {
            int asInt = dynamic.asInt();
            int i11 = -1;
            for (int i12 = 0; i12 < f10.f47630d; i12++) {
                u0 b10 = f10.b(i12);
                int i13 = 0;
                while (true) {
                    if (i13 >= b10.f47614d) {
                        break;
                    } else if (b10.c(i13).C == asInt) {
                        iArr[0] = i13;
                        i11 = i12;
                        break;
                    } else {
                        i13++;
                    }
                }
            }
            A0 = i11;
        } else if (D0 == 3 && ne.w0.f40158a > 18) {
            CaptioningManager captioningManager = (CaptioningManager) this.f8989m0.getSystemService("captioning");
            if (captioningManager != null && captioningManager.isEnabled()) {
                A0 = A0(f10);
            }
            A0 = -1;
        } else {
            if (D0 == 1) {
                A0 = A0(f10);
            }
            A0 = -1;
        }
        if (A0 == -1 && i10 == 2 && f10.f47630d != 0) {
            u0 b11 = f10.b(0);
            iArr = new int[b11.f47614d];
            for (int i14 = 0; i14 < b11.f47614d; i14++) {
                iArr[i14] = i14;
            }
            A0 = 0;
        }
        if (A0 == -1) {
            this.f8999u.b0(A);
        } else {
            this.f8999u.b0(this.f8999u.J().H().v0(D0, false).w0(D0, f10, new DefaultTrackSelector.e(A0, iArr)).A());
        }
    }

    public void o1(String str, Dynamic dynamic) {
        this.U = str;
        this.V = dynamic;
        n1(2, str, dynamic);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        F0();
    }

    @Override // android.media.AudioManager.OnAudioFocusChangeListener
    public void onAudioFocusChange(int i10) {
        if (i10 != -2) {
            if (i10 != -1) {
                if (i10 == 1) {
                    this.E = true;
                    this.f8977d.b(true);
                }
            } else {
                this.E = false;
                this.f8977d.b(false);
                this.O.post(new RunnableC0146g());
                this.f8990n0.abandonAudioFocus(this);
            }
        } else {
            this.f8977d.b(false);
        }
        if (this.f8998t != null) {
            if (i10 == -3) {
                if (!this.D) {
                    this.O.post(new h());
                }
            } else if (i10 == 1 && !this.D) {
                this.O.post(new i());
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        v1();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        this.A = true;
        if (!this.f8981f0) {
            d1(false);
            SimpleExoPlayer simpleExoPlayer = this.f8998t;
            if (simpleExoPlayer != null) {
                try {
                    simpleExoPlayer.G0();
                } catch (Exception unused) {
                }
            }
        }
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        if (!this.f8981f0 || !this.A) {
            d1(!this.B);
        }
        this.A = false;
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onLoadingChanged(boolean z10) {
    }

    @Override // com.google.android.exoplayer2.Player.b, gd.d
    public void onMetadata(Metadata metadata) {
        this.f8977d.t(metadata);
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
        this.f8977d.n(playbackParameters.f12584d);
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPlayerError(PlaybackException playbackException) {
        if (!(playbackException instanceof j)) {
            Log.e("PlaybackException with unrecognized class type", playbackException.toString());
            this.f8977d.f("PlaybackException with unrecognized class type", playbackException);
            return;
        }
        j jVar = (j) playbackException;
        String str = "PlaybackException type : " + jVar.f13251t;
        int i10 = jVar.f13251t;
        if (i10 == 1) {
            Exception k10 = jVar.k();
            if (k10 != null && k10.getMessage() != null && k10.getMessage().contains("MediaCodecVideoRenderer")) {
                M0();
                F0();
                return;
            } else if (k10 instanceof r.b) {
                r.b bVar = (r.b) k10;
                str = bVar.f24233i.f24194a == null ? bVar.getCause() instanceof y.c ? getResources().getString(d6.b.f21251d) : bVar.f24232e ? getResources().getString(d6.b.f21250c, bVar.f24231d) : getResources().getString(d6.b.f21249b, bVar.f24231d) : getResources().getString(d6.b.f21248a, bVar.f24233i.f24194a);
            }
        } else if (i10 == 0) {
            str = getResources().getString(d6.b.f21252e);
        }
        this.f8977d.f(str, playbackException);
        this.f9000v = true;
        if (H0(jVar)) {
            w0();
            F0();
            return;
        }
        x1();
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPlayerStateChanged(boolean z10, int i10) {
        String str;
        String str2 = "onStateChanged: playWhenReady=" + z10 + ", playbackState=";
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        str = str2 + "unknown";
                    } else {
                        str = str2 + "ended";
                        this.f8977d.e();
                        J0();
                        setKeepScreenOn(false);
                    }
                } else {
                    str = str2 + "ready";
                    this.f8977d.p();
                    I0(false);
                    u1();
                    y1();
                    PlayerControlView playerControlView = this.f8991o;
                    if (playerControlView != null) {
                        playerControlView.J();
                    }
                    setKeepScreenOn(this.f8978d0);
                }
            } else {
                str = str2 + "buffering";
                I0(true);
                v0();
                setKeepScreenOn(this.f8978d0);
            }
        } else {
            String str3 = str2 + "idle";
            this.f8977d.k();
            v0();
            if (!z10) {
                setKeepScreenOn(false);
            }
            str = str3;
        }
        Log.d("ReactExoplayerView", str);
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (i10 == 1) {
            this.f8977d.r(this.f8998t.Z(), positionInfo2.f12605r % 1000);
            if (this.J) {
                n1(2, this.U, this.V);
            }
        }
        if (this.f9000v) {
            x1();
        }
        if (this.J) {
            n1(2, this.U, this.V);
        }
        if (i10 == 0 && this.f8998t.T() == 1) {
            this.f8977d.e();
        }
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onRepeatModeChanged(int i10) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onShuffleModeEnabledChanged(boolean z10) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onTimelineChanged(Timeline timeline, int i10) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onTracksChanged(Tracks tracks) {
    }

    public void p1(Uri uri, String str, Map map) {
        if (uri != null) {
            boolean equals = uri.equals(this.P);
            this.P = uri;
            this.Q = str;
            this.f8982g0 = map;
            this.f8997s = com.brentvatne.exoplayer.b.c(this.f8989m0, this.f8984i, map);
            if (!equals) {
                N0();
            }
        }
    }

    public void q1(ReadableArray readableArray) {
        this.f8975b0 = readableArray;
        N0();
    }

    public void r1(boolean z10) {
        boolean z11;
        if (z10 && this.f8985i0 == null) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f8996r.setUseTextureView(z11);
    }

    public void s1(float f10) {
        this.G = f10;
        SimpleExoPlayer simpleExoPlayer = this.f8998t;
        if (simpleExoPlayer != null) {
            simpleExoPlayer.F0(f10);
        }
    }

    @Override // android.view.View
    public void setId(int i10) {
        super.setId(i10);
        this.f8977d.s(i10);
    }

    @Override // le.e.a
    public void u(int i10, long j10, long j11) {
        int i11;
        String str;
        if (this.f8983h0) {
            SimpleExoPlayer simpleExoPlayer = this.f8998t;
            if (simpleExoPlayer == null) {
                this.f8977d.c(j11, 0, 0, "-1");
                return;
            }
            Format y02 = simpleExoPlayer.y0();
            int i12 = 0;
            if (y02 != null) {
                i11 = y02.B;
            } else {
                i11 = 0;
            }
            if (y02 != null) {
                i12 = y02.C;
            }
            int i13 = i12;
            if (y02 != null) {
                str = y02.f12324d;
            } else {
                str = "-1";
            }
            this.f8977d.c(j11, i13, i11, str);
        }
    }

    public void u0() {
        v1();
    }

    @Override // rc.u
    public void w(int i10, r.b bVar) {
        Log.d("DRM Info", "onDrmKeysRestored");
    }

    public void x0() {
        if (this.P != null) {
            this.f8998t.G0();
            this.f8998t.a();
            this.P = null;
            this.Q = null;
            this.f8982g0 = null;
            this.f8997s = null;
            w0();
        }
    }

    @Override // rc.u
    public void z(int i10, r.b bVar) {
        Log.d("DRM Info", "onDrmKeysRemoved");
    }
}
