package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.os.Looper;
import android.os.SystemClock;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.ui.PlayerControlView;
import com.google.android.exoplayer2.ui.j;
import java.util.Arrays;
import java.util.Formatter;
import java.util.Iterator;
import java.util.Locale;
import java.util.concurrent.CopyOnWriteArrayList;
import ke.l;
import ke.m;
import ke.n;
import lc.u;
import ne.k0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PlayerControlView extends FrameLayout {
    private final Formatter A;
    private final Timeline.b B;
    private final Timeline.d C;
    private final Runnable D;
    private final Runnable E;
    private final Drawable F;
    private final Drawable G;
    private final Drawable H;
    private final String I;
    private final String J;
    private final String K;
    private final Drawable L;
    private final Drawable M;
    private final float N;
    private final float O;
    private final String P;
    private final String Q;
    private Player R;
    private boolean S;
    private boolean T;
    private boolean U;
    private boolean V;
    private int W;

    /* renamed from: a0  reason: collision with root package name */
    private int f12792a0;

    /* renamed from: b0  reason: collision with root package name */
    private int f12793b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f12794c0;

    /* renamed from: d  reason: collision with root package name */
    private final c f12795d;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f12796d0;

    /* renamed from: e  reason: collision with root package name */
    private final CopyOnWriteArrayList f12797e;

    /* renamed from: e0  reason: collision with root package name */
    private boolean f12798e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f12799f0;

    /* renamed from: g0  reason: collision with root package name */
    private boolean f12800g0;

    /* renamed from: h0  reason: collision with root package name */
    private long f12801h0;

    /* renamed from: i  reason: collision with root package name */
    private final View f12802i;

    /* renamed from: i0  reason: collision with root package name */
    private long[] f12803i0;

    /* renamed from: j0  reason: collision with root package name */
    private boolean[] f12804j0;

    /* renamed from: k0  reason: collision with root package name */
    private long[] f12805k0;

    /* renamed from: l0  reason: collision with root package name */
    private boolean[] f12806l0;

    /* renamed from: m0  reason: collision with root package name */
    private long f12807m0;

    /* renamed from: n0  reason: collision with root package name */
    private long f12808n0;

    /* renamed from: o  reason: collision with root package name */
    private final View f12809o;

    /* renamed from: o0  reason: collision with root package name */
    private long f12810o0;

    /* renamed from: p  reason: collision with root package name */
    private final View f12811p;

    /* renamed from: q  reason: collision with root package name */
    private final View f12812q;

    /* renamed from: r  reason: collision with root package name */
    private final View f12813r;

    /* renamed from: s  reason: collision with root package name */
    private final View f12814s;

    /* renamed from: t  reason: collision with root package name */
    private final ImageView f12815t;

    /* renamed from: u  reason: collision with root package name */
    private final ImageView f12816u;

    /* renamed from: v  reason: collision with root package name */
    private final View f12817v;

    /* renamed from: w  reason: collision with root package name */
    private final TextView f12818w;

    /* renamed from: x  reason: collision with root package name */
    private final TextView f12819x;

    /* renamed from: y  reason: collision with root package name */
    private final j f12820y;

    /* renamed from: z  reason: collision with root package name */
    private final StringBuilder f12821z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public static boolean a(View view) {
            return view.isAccessibilityFocused();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements Player.b, j.a, View.OnClickListener {
        private c() {
        }

        @Override // com.google.android.exoplayer2.ui.j.a
        public void g(j jVar, long j10) {
            if (PlayerControlView.this.f12819x != null) {
                PlayerControlView.this.f12819x.setText(w0.l0(PlayerControlView.this.f12821z, PlayerControlView.this.A, j10));
            }
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            Player player = PlayerControlView.this.R;
            if (player != null) {
                if (PlayerControlView.this.f12809o == view) {
                    player.x();
                } else if (PlayerControlView.this.f12802i == view) {
                    player.l();
                } else if (PlayerControlView.this.f12813r == view) {
                    if (player.O() != 4) {
                        player.W();
                    }
                } else if (PlayerControlView.this.f12814s == view) {
                    player.X();
                } else if (PlayerControlView.this.f12811p == view) {
                    w0.u0(player);
                } else if (PlayerControlView.this.f12812q == view) {
                    w0.t0(player);
                } else if (PlayerControlView.this.f12815t == view) {
                    player.R(k0.a(player.T(), PlayerControlView.this.f12793b0));
                } else if (PlayerControlView.this.f12816u == view) {
                    player.C(!player.U());
                }
            }
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onEvents(Player player, Player.Events events) {
            if (events.b(4, 5)) {
                PlayerControlView.this.N();
            }
            if (events.b(4, 5, 7)) {
                PlayerControlView.this.O();
            }
            if (events.a(8)) {
                PlayerControlView.this.P();
            }
            if (events.a(9)) {
                PlayerControlView.this.Q();
            }
            if (events.b(8, 9, 11, 0, 13)) {
                PlayerControlView.this.M();
            }
            if (events.b(11, 0)) {
                PlayerControlView.this.R();
            }
        }

        @Override // com.google.android.exoplayer2.ui.j.a
        public void t(j jVar, long j10, boolean z10) {
            PlayerControlView.this.V = false;
            if (!z10 && PlayerControlView.this.R != null) {
                PlayerControlView playerControlView = PlayerControlView.this;
                playerControlView.I(playerControlView.R, j10);
            }
        }

        @Override // com.google.android.exoplayer2.ui.j.a
        public void u(j jVar, long j10) {
            PlayerControlView.this.V = true;
            if (PlayerControlView.this.f12819x != null) {
                PlayerControlView.this.f12819x.setText(w0.l0(PlayerControlView.this.f12821z, PlayerControlView.this.A, j10));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void g(int i10);
    }

    static {
        u.a("goog.exo.ui");
    }

    public PlayerControlView(Context context) {
        this(context, null);
    }

    private void B() {
        removeCallbacks(this.E);
        if (this.W > 0) {
            long uptimeMillis = SystemClock.uptimeMillis();
            int i10 = this.W;
            this.f12801h0 = uptimeMillis + i10;
            if (this.S) {
                postDelayed(this.E, i10);
                return;
            }
            return;
        }
        this.f12801h0 = -9223372036854775807L;
    }

    private static boolean C(int i10) {
        return i10 == 90 || i10 == 89 || i10 == 85 || i10 == 79 || i10 == 126 || i10 == 127 || i10 == 87 || i10 == 88;
    }

    private void F() {
        View view;
        View view2;
        boolean a12 = w0.a1(this.R);
        if (a12 && (view2 = this.f12811p) != null) {
            view2.sendAccessibilityEvent(8);
        } else if (!a12 && (view = this.f12812q) != null) {
            view.sendAccessibilityEvent(8);
        }
    }

    private void G() {
        View view;
        View view2;
        boolean a12 = w0.a1(this.R);
        if (a12 && (view2 = this.f12811p) != null) {
            view2.requestFocus();
        } else if (!a12 && (view = this.f12812q) != null) {
            view.requestFocus();
        }
    }

    private void H(Player player, int i10, long j10) {
        player.z(i10, j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void I(Player player, long j10) {
        int Q;
        Timeline v10 = player.v();
        if (this.U && !v10.u()) {
            int t10 = v10.t();
            Q = 0;
            while (true) {
                long f10 = v10.r(Q, this.C).f();
                if (j10 < f10) {
                    break;
                } else if (Q == t10 - 1) {
                    j10 = f10;
                    break;
                } else {
                    j10 -= f10;
                    Q++;
                }
            }
        } else {
            Q = player.Q();
        }
        H(player, Q, j10);
        O();
    }

    private void K() {
        N();
        M();
        P();
        Q();
        R();
    }

    private void L(boolean z10, boolean z11, View view) {
        float f10;
        int i10;
        if (view == null) {
            return;
        }
        view.setEnabled(z11);
        if (z11) {
            f10 = this.N;
        } else {
            f10 = this.O;
        }
        view.setAlpha(f10);
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        view.setVisibility(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void M() {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        if (D() && this.S) {
            Player player = this.R;
            if (player != null) {
                z10 = player.s(5);
                z12 = player.s(7);
                z13 = player.s(11);
                z14 = player.s(12);
                z11 = player.s(9);
            } else {
                z10 = false;
                z11 = false;
                z12 = false;
                z13 = false;
                z14 = false;
            }
            L(this.f12798e0, z12, this.f12802i);
            L(this.f12794c0, z13, this.f12814s);
            L(this.f12796d0, z14, this.f12813r);
            L(this.f12799f0, z11, this.f12809o);
            j jVar = this.f12820y;
            if (jVar != null) {
                jVar.setEnabled(z10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void N() {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        if (D() && this.S) {
            boolean a12 = w0.a1(this.R);
            View view = this.f12811p;
            int i11 = 8;
            boolean z13 = true;
            if (view != null) {
                if (!a12 && view.isFocused()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (w0.f40197a < 21) {
                    z11 = z10;
                } else if (!a12 && b.a(this.f12811p)) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                View view2 = this.f12811p;
                if (a12) {
                    i10 = 0;
                } else {
                    i10 = 8;
                }
                view2.setVisibility(i10);
            } else {
                z10 = false;
                z11 = false;
            }
            View view3 = this.f12812q;
            if (view3 != null) {
                if (a12 && view3.isFocused()) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                z10 |= z12;
                if (w0.f40197a < 21) {
                    z13 = z10;
                } else if (!a12 || !b.a(this.f12812q)) {
                    z13 = false;
                }
                z11 |= z13;
                View view4 = this.f12812q;
                if (!a12) {
                    i11 = 0;
                }
                view4.setVisibility(i11);
            }
            if (z10) {
                G();
            }
            if (z11) {
                F();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void O() {
        long j10;
        long j11;
        boolean z10;
        int O;
        long j12;
        if (D() && this.S) {
            Player player = this.R;
            if (player != null) {
                j10 = this.f12807m0 + player.K();
                j11 = this.f12807m0 + player.V();
            } else {
                j10 = 0;
                j11 = 0;
            }
            if (j10 != this.f12808n0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f12808n0 = j10;
            this.f12810o0 = j11;
            TextView textView = this.f12819x;
            if (textView != null && !this.V && z10) {
                textView.setText(w0.l0(this.f12821z, this.A, j10));
            }
            j jVar = this.f12820y;
            if (jVar != null) {
                jVar.setPosition(j10);
                this.f12820y.setBufferedPosition(j11);
            }
            removeCallbacks(this.D);
            if (player == null) {
                O = 1;
            } else {
                O = player.O();
            }
            long j13 = 1000;
            if (player != null && player.P()) {
                j jVar2 = this.f12820y;
                if (jVar2 != null) {
                    j12 = jVar2.getPreferredUpdateDelay();
                } else {
                    j12 = 1000;
                }
                long min = Math.min(j12, 1000 - (j10 % 1000));
                float f10 = player.c().f11552d;
                if (f10 > 0.0f) {
                    j13 = ((float) min) / f10;
                }
                postDelayed(this.D, w0.r(j13, this.f12792a0, 1000L));
            } else if (O != 4 && O != 1) {
                postDelayed(this.D, 1000L);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void P() {
        ImageView imageView;
        if (D() && this.S && (imageView = this.f12815t) != null) {
            if (this.f12793b0 == 0) {
                L(false, false, imageView);
                return;
            }
            Player player = this.R;
            if (player == null) {
                L(true, false, imageView);
                this.f12815t.setImageDrawable(this.F);
                this.f12815t.setContentDescription(this.I);
                return;
            }
            L(true, true, imageView);
            int T = player.T();
            if (T != 0) {
                if (T != 1) {
                    if (T == 2) {
                        this.f12815t.setImageDrawable(this.H);
                        this.f12815t.setContentDescription(this.K);
                    }
                } else {
                    this.f12815t.setImageDrawable(this.G);
                    this.f12815t.setContentDescription(this.J);
                }
            } else {
                this.f12815t.setImageDrawable(this.F);
                this.f12815t.setContentDescription(this.I);
            }
            this.f12815t.setVisibility(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Q() {
        ImageView imageView;
        Drawable drawable;
        String str;
        if (D() && this.S && (imageView = this.f12816u) != null) {
            Player player = this.R;
            if (!this.f12800g0) {
                L(false, false, imageView);
            } else if (player == null) {
                L(true, false, imageView);
                this.f12816u.setImageDrawable(this.M);
                this.f12816u.setContentDescription(this.Q);
            } else {
                L(true, true, imageView);
                ImageView imageView2 = this.f12816u;
                if (player.U()) {
                    drawable = this.L;
                } else {
                    drawable = this.M;
                }
                imageView2.setImageDrawable(drawable);
                ImageView imageView3 = this.f12816u;
                if (player.U()) {
                    str = this.P;
                } else {
                    str = this.Q;
                }
                imageView3.setContentDescription(str);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R() {
        boolean z10;
        int i10;
        int i11;
        int i12;
        Timeline.d dVar;
        long j10;
        int length;
        Player player = this.R;
        if (player == null) {
            return;
        }
        boolean z11 = true;
        if (this.T && x(player.v(), this.C)) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.U = z10;
        long j11 = 0;
        this.f12807m0 = 0L;
        Timeline v10 = player.v();
        if (!v10.u()) {
            int Q = player.Q();
            boolean z12 = this.U;
            if (z12) {
                i11 = 0;
            } else {
                i11 = Q;
            }
            if (z12) {
                i12 = v10.t() - 1;
            } else {
                i12 = Q;
            }
            i10 = 0;
            long j12 = 0;
            while (true) {
                if (i11 > i12) {
                    break;
                }
                if (i11 == Q) {
                    this.f12807m0 = w0.p1(j12);
                }
                v10.r(i11, this.C);
                Timeline.d dVar2 = this.C;
                if (dVar2.f11615y == -9223372036854775807L) {
                    ne.a.g(this.U ^ z11);
                    break;
                }
                int i13 = dVar2.f11616z;
                while (true) {
                    dVar = this.C;
                    if (i13 <= dVar.A) {
                        v10.j(i13, this.B);
                        int r10 = this.B.r();
                        int f10 = this.B.f();
                        while (r10 < f10) {
                            long i14 = this.B.i(r10);
                            if (i14 == Long.MIN_VALUE) {
                                j10 = j11;
                                long j13 = this.B.f11594o;
                                if (j13 != -9223372036854775807L) {
                                    i14 = j13;
                                } else {
                                    r10++;
                                    j11 = j10;
                                }
                            } else {
                                j10 = j11;
                            }
                            long q10 = i14 + this.B.q();
                            if (q10 >= j10) {
                                long[] jArr = this.f12803i0;
                                if (i10 == jArr.length) {
                                    if (jArr.length == 0) {
                                        length = 1;
                                    } else {
                                        length = jArr.length * 2;
                                    }
                                    this.f12803i0 = Arrays.copyOf(jArr, length);
                                    this.f12804j0 = Arrays.copyOf(this.f12804j0, length);
                                }
                                this.f12803i0[i10] = w0.p1(j12 + q10);
                                this.f12804j0[i10] = this.B.s(r10);
                                i10++;
                            }
                            r10++;
                            j11 = j10;
                        }
                        i13++;
                    }
                }
                j12 += dVar.f11615y;
                i11++;
                j11 = j11;
                z11 = true;
            }
            j11 = j12;
        } else {
            i10 = 0;
        }
        long p12 = w0.p1(j11);
        TextView textView = this.f12818w;
        if (textView != null) {
            textView.setText(w0.l0(this.f12821z, this.A, p12));
        }
        j jVar = this.f12820y;
        if (jVar != null) {
            jVar.setDuration(p12);
            int length2 = this.f12805k0.length;
            int i15 = i10 + length2;
            long[] jArr2 = this.f12803i0;
            if (i15 > jArr2.length) {
                this.f12803i0 = Arrays.copyOf(jArr2, i15);
                this.f12804j0 = Arrays.copyOf(this.f12804j0, i15);
            }
            System.arraycopy(this.f12805k0, 0, this.f12803i0, i10, length2);
            System.arraycopy(this.f12806l0, 0, this.f12804j0, i10, length2);
            this.f12820y.b(this.f12803i0, this.f12804j0, i15);
        }
        O();
    }

    private static boolean x(Timeline timeline, Timeline.d dVar) {
        if (timeline.t() > 100) {
            return false;
        }
        int t10 = timeline.t();
        for (int i10 = 0; i10 < t10; i10++) {
            if (timeline.r(i10, dVar).f11615y == -9223372036854775807L) {
                return false;
            }
        }
        return true;
    }

    private static int z(TypedArray typedArray, int i10) {
        return typedArray.getInt(n.f32338z, i10);
    }

    public void A() {
        if (D()) {
            setVisibility(8);
            Iterator it = this.f12797e.iterator();
            while (it.hasNext()) {
                ((e) it.next()).g(getVisibility());
            }
            removeCallbacks(this.D);
            removeCallbacks(this.E);
            this.f12801h0 = -9223372036854775807L;
        }
    }

    public boolean D() {
        if (getVisibility() == 0) {
            return true;
        }
        return false;
    }

    public void E(e eVar) {
        this.f12797e.remove(eVar);
    }

    public void J() {
        if (!D()) {
            setVisibility(0);
            Iterator it = this.f12797e.iterator();
            while (it.hasNext()) {
                ((e) it.next()).g(getVisibility());
            }
            K();
            G();
            F();
        }
        B();
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        if (!y(keyEvent) && !super.dispatchKeyEvent(keyEvent)) {
            return false;
        }
        return true;
    }

    @Override // android.view.ViewGroup, android.view.View
    public final boolean dispatchTouchEvent(MotionEvent motionEvent) {
        if (motionEvent.getAction() == 0) {
            removeCallbacks(this.E);
        } else if (motionEvent.getAction() == 1) {
            B();
        }
        return super.dispatchTouchEvent(motionEvent);
    }

    public Player getPlayer() {
        return this.R;
    }

    public int getRepeatToggleModes() {
        return this.f12793b0;
    }

    public boolean getShowShuffleButton() {
        return this.f12800g0;
    }

    public int getShowTimeoutMs() {
        return this.W;
    }

    public boolean getShowVrButton() {
        View view = this.f12817v;
        if (view != null && view.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.S = true;
        long j10 = this.f12801h0;
        if (j10 != -9223372036854775807L) {
            long uptimeMillis = j10 - SystemClock.uptimeMillis();
            if (uptimeMillis <= 0) {
                A();
            } else {
                postDelayed(this.E, uptimeMillis);
            }
        } else if (D()) {
            B();
        }
        K();
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.S = false;
        removeCallbacks(this.D);
        removeCallbacks(this.E);
    }

    public void setPlayer(Player player) {
        boolean z10;
        boolean z11 = false;
        if (Looper.myLooper() == Looper.getMainLooper()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (player == null || player.w() == Looper.getMainLooper()) {
            z11 = true;
        }
        ne.a.a(z11);
        Player player2 = this.R;
        if (player2 == player) {
            return;
        }
        if (player2 != null) {
            player2.h(this.f12795d);
        }
        this.R = player;
        if (player != null) {
            player.L(this.f12795d);
        }
        K();
    }

    public void setProgressUpdateListener(d dVar) {
    }

    public void setRepeatToggleModes(int i10) {
        this.f12793b0 = i10;
        Player player = this.R;
        if (player != null) {
            int T = player.T();
            if (i10 == 0 && T != 0) {
                this.R.R(0);
            } else if (i10 == 1 && T == 2) {
                this.R.R(1);
            } else if (i10 == 2 && T == 1) {
                this.R.R(2);
            }
        }
        P();
    }

    public void setShowFastForwardButton(boolean z10) {
        this.f12796d0 = z10;
        M();
    }

    public void setShowMultiWindowTimeBar(boolean z10) {
        this.T = z10;
        R();
    }

    public void setShowNextButton(boolean z10) {
        this.f12799f0 = z10;
        M();
    }

    public void setShowPreviousButton(boolean z10) {
        this.f12798e0 = z10;
        M();
    }

    public void setShowRewindButton(boolean z10) {
        this.f12794c0 = z10;
        M();
    }

    public void setShowShuffleButton(boolean z10) {
        this.f12800g0 = z10;
        Q();
    }

    public void setShowTimeoutMs(int i10) {
        this.W = i10;
        if (D()) {
            B();
        }
    }

    public void setShowVrButton(boolean z10) {
        int i10;
        View view = this.f12817v;
        if (view != null) {
            if (z10) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            view.setVisibility(i10);
        }
    }

    public void setTimeBarMinUpdateInterval(int i10) {
        this.f12792a0 = w0.q(i10, 16, 1000);
    }

    public void setVrButtonListener(View.OnClickListener onClickListener) {
        boolean z10;
        View view = this.f12817v;
        if (view != null) {
            view.setOnClickListener(onClickListener);
            boolean showVrButton = getShowVrButton();
            if (onClickListener != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            L(showVrButton, z10, this.f12817v);
        }
    }

    public void w(e eVar) {
        ne.a.e(eVar);
        this.f12797e.add(eVar);
    }

    public boolean y(KeyEvent keyEvent) {
        int keyCode = keyEvent.getKeyCode();
        Player player = this.R;
        if (player != null && C(keyCode)) {
            if (keyEvent.getAction() == 0) {
                if (keyCode == 90) {
                    if (player.O() != 4) {
                        player.W();
                        return true;
                    }
                    return true;
                } else if (keyCode == 89) {
                    player.X();
                    return true;
                } else if (keyEvent.getRepeatCount() == 0) {
                    if (keyCode != 79 && keyCode != 85) {
                        if (keyCode != 87) {
                            if (keyCode != 88) {
                                if (keyCode != 126) {
                                    if (keyCode == 127) {
                                        w0.t0(player);
                                        return true;
                                    }
                                    return true;
                                }
                                w0.u0(player);
                                return true;
                            }
                            player.l();
                            return true;
                        }
                        player.x();
                        return true;
                    }
                    w0.v0(player);
                    return true;
                } else {
                    return true;
                }
            }
            return true;
        }
        return false;
    }

    public PlayerControlView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public PlayerControlView(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, attributeSet);
    }

    public PlayerControlView(Context context, AttributeSet attributeSet, int i10, AttributeSet attributeSet2) {
        super(context, attributeSet, i10);
        int i11 = l.f32289b;
        this.W = 5000;
        this.f12793b0 = 0;
        this.f12792a0 = androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION;
        this.f12801h0 = -9223372036854775807L;
        this.f12794c0 = true;
        this.f12796d0 = true;
        this.f12798e0 = true;
        this.f12799f0 = true;
        this.f12800g0 = false;
        if (attributeSet2 != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet2, n.f32336x, i10, 0);
            try {
                this.W = obtainStyledAttributes.getInt(n.F, this.W);
                i11 = obtainStyledAttributes.getResourceId(n.f32337y, i11);
                this.f12793b0 = z(obtainStyledAttributes, this.f12793b0);
                this.f12794c0 = obtainStyledAttributes.getBoolean(n.D, this.f12794c0);
                this.f12796d0 = obtainStyledAttributes.getBoolean(n.A, this.f12796d0);
                this.f12798e0 = obtainStyledAttributes.getBoolean(n.C, this.f12798e0);
                this.f12799f0 = obtainStyledAttributes.getBoolean(n.B, this.f12799f0);
                this.f12800g0 = obtainStyledAttributes.getBoolean(n.E, this.f12800g0);
                setTimeBarMinUpdateInterval(obtainStyledAttributes.getInt(n.G, this.f12792a0));
            } finally {
                obtainStyledAttributes.recycle();
            }
        }
        this.f12797e = new CopyOnWriteArrayList();
        this.B = new Timeline.b();
        this.C = new Timeline.d();
        StringBuilder sb2 = new StringBuilder();
        this.f12821z = sb2;
        this.A = new Formatter(sb2, Locale.getDefault());
        this.f12803i0 = new long[0];
        this.f12804j0 = new boolean[0];
        this.f12805k0 = new long[0];
        this.f12806l0 = new boolean[0];
        c cVar = new c();
        this.f12795d = cVar;
        this.D = new Runnable() { // from class: ke.f
            @Override // java.lang.Runnable
            public final void run() {
                PlayerControlView.this.O();
            }
        };
        this.E = new Runnable() { // from class: ke.g
            @Override // java.lang.Runnable
            public final void run() {
                PlayerControlView.this.A();
            }
        };
        LayoutInflater.from(context).inflate(i11, this);
        setDescendantFocusability(262144);
        j jVar = (j) findViewById(ke.j.f32278p);
        View findViewById = findViewById(ke.j.f32279q);
        if (jVar != null) {
            this.f12820y = jVar;
        } else if (findViewById != null) {
            DefaultTimeBar defaultTimeBar = new DefaultTimeBar(context, null, 0, attributeSet2);
            defaultTimeBar.setId(ke.j.f32278p);
            defaultTimeBar.setLayoutParams(findViewById.getLayoutParams());
            ViewGroup viewGroup = (ViewGroup) findViewById.getParent();
            int indexOfChild = viewGroup.indexOfChild(findViewById);
            viewGroup.removeView(findViewById);
            viewGroup.addView(defaultTimeBar, indexOfChild);
            this.f12820y = defaultTimeBar;
        } else {
            this.f12820y = null;
        }
        this.f12818w = (TextView) findViewById(ke.j.f32269g);
        this.f12819x = (TextView) findViewById(ke.j.f32276n);
        j jVar2 = this.f12820y;
        if (jVar2 != null) {
            jVar2.a(cVar);
        }
        View findViewById2 = findViewById(ke.j.f32275m);
        this.f12811p = findViewById2;
        if (findViewById2 != null) {
            findViewById2.setOnClickListener(cVar);
        }
        View findViewById3 = findViewById(ke.j.f32274l);
        this.f12812q = findViewById3;
        if (findViewById3 != null) {
            findViewById3.setOnClickListener(cVar);
        }
        View findViewById4 = findViewById(ke.j.f32277o);
        this.f12802i = findViewById4;
        if (findViewById4 != null) {
            findViewById4.setOnClickListener(cVar);
        }
        View findViewById5 = findViewById(ke.j.f32272j);
        this.f12809o = findViewById5;
        if (findViewById5 != null) {
            findViewById5.setOnClickListener(cVar);
        }
        View findViewById6 = findViewById(ke.j.f32281s);
        this.f12814s = findViewById6;
        if (findViewById6 != null) {
            findViewById6.setOnClickListener(cVar);
        }
        View findViewById7 = findViewById(ke.j.f32271i);
        this.f12813r = findViewById7;
        if (findViewById7 != null) {
            findViewById7.setOnClickListener(cVar);
        }
        ImageView imageView = (ImageView) findViewById(ke.j.f32280r);
        this.f12815t = imageView;
        if (imageView != null) {
            imageView.setOnClickListener(cVar);
        }
        ImageView imageView2 = (ImageView) findViewById(ke.j.f32282t);
        this.f12816u = imageView2;
        if (imageView2 != null) {
            imageView2.setOnClickListener(cVar);
        }
        View findViewById8 = findViewById(ke.j.f32285w);
        this.f12817v = findViewById8;
        setShowVrButton(false);
        L(false, false, findViewById8);
        Resources resources = context.getResources();
        this.N = resources.getInteger(ke.k.f32287b) / 100.0f;
        this.O = resources.getInteger(ke.k.f32286a) / 100.0f;
        this.F = w0.W(context, resources, ke.i.f32258b);
        this.G = w0.W(context, resources, ke.i.f32259c);
        this.H = w0.W(context, resources, ke.i.f32257a);
        this.L = w0.W(context, resources, ke.i.f32261e);
        this.M = w0.W(context, resources, ke.i.f32260d);
        this.I = resources.getString(m.f32293c);
        this.J = resources.getString(m.f32294d);
        this.K = resources.getString(m.f32292b);
        this.P = resources.getString(m.f32297g);
        this.Q = resources.getString(m.f32296f);
        this.f12808n0 = -9223372036854775807L;
        this.f12810o0 = -9223372036854775807L;
    }
}
