package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Looper;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.SurfaceView;
import android.view.TextureView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.ui.AspectRatioFrameLayout;
import com.google.android.exoplayer2.ui.PlayerControlView;
import com.google.android.exoplayer2.video.VideoSize;
import java.util.ArrayList;
import java.util.List;
import ji.s;
import ke.l;
import ke.m;
import ke.n;
import ne.o;
import ne.w0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PlayerView extends FrameLayout {
    private boolean A;
    private Drawable B;
    private int C;
    private boolean D;
    private CharSequence E;
    private int F;
    private boolean G;
    private boolean H;
    private boolean I;
    private int J;

    /* renamed from: d  reason: collision with root package name */
    private final a f14226d;

    /* renamed from: e  reason: collision with root package name */
    private final AspectRatioFrameLayout f14227e;

    /* renamed from: i  reason: collision with root package name */
    private final View f14228i;

    /* renamed from: o  reason: collision with root package name */
    private final View f14229o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f14230p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageView f14231q;

    /* renamed from: r  reason: collision with root package name */
    private final SubtitleView f14232r;

    /* renamed from: s  reason: collision with root package name */
    private final View f14233s;

    /* renamed from: t  reason: collision with root package name */
    private final TextView f14234t;

    /* renamed from: u  reason: collision with root package name */
    private final PlayerControlView f14235u;

    /* renamed from: v  reason: collision with root package name */
    private final FrameLayout f14236v;

    /* renamed from: w  reason: collision with root package name */
    private final FrameLayout f14237w;

    /* renamed from: x  reason: collision with root package name */
    private Player f14238x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f14239y;

    /* renamed from: z  reason: collision with root package name */
    private PlayerControlView.e f14240z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements Player.b, View.OnLayoutChangeListener, View.OnClickListener, PlayerControlView.e {

        /* renamed from: d  reason: collision with root package name */
        private final Timeline.b f14241d = new Timeline.b();

        /* renamed from: e  reason: collision with root package name */
        private Object f14242e;

        public a() {
        }

        @Override // com.google.android.exoplayer2.ui.PlayerControlView.e
        public void g(int i10) {
            PlayerView.this.I();
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            PlayerView.this.F();
        }

        @Override // com.google.android.exoplayer2.Player.b, zd.m
        public void onCues(CueGroup cueGroup) {
            if (PlayerView.this.f14232r != null) {
                PlayerView.this.f14232r.setCues(cueGroup.f13995d);
            }
        }

        @Override // android.view.View.OnLayoutChangeListener
        public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            PlayerView.o((TextureView) view, PlayerView.this.J);
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlayWhenReadyChanged(boolean z10, int i10) {
            PlayerView.this.H();
            PlayerView.this.J();
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlaybackStateChanged(int i10) {
            PlayerView.this.H();
            PlayerView.this.K();
            PlayerView.this.J();
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
            if (PlayerView.this.w() && PlayerView.this.H) {
                PlayerView.this.u();
            }
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onRenderedFirstFrame() {
            if (PlayerView.this.f14228i != null) {
                PlayerView.this.f14228i.setVisibility(4);
            }
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onTracksChanged(Tracks tracks) {
            Player player = (Player) ne.a.e(PlayerView.this.f14238x);
            Timeline v10 = player.v();
            if (v10.u()) {
                this.f14242e = null;
            } else if (!player.o().c()) {
                this.f14242e = v10.k(player.E(), this.f14241d, true).f12995e;
            } else {
                Object obj = this.f14242e;
                if (obj != null) {
                    int f10 = v10.f(obj);
                    if (f10 != -1) {
                        if (player.Q() == v10.j(f10, this.f14241d).f12996i) {
                            return;
                        }
                    }
                    this.f14242e = null;
                }
            }
            PlayerView.this.L(false);
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onVideoSizeChanged(VideoSize videoSize) {
            PlayerView.this.G();
        }
    }

    public PlayerView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private boolean A(Drawable drawable) {
        if (drawable != null) {
            int intrinsicWidth = drawable.getIntrinsicWidth();
            int intrinsicHeight = drawable.getIntrinsicHeight();
            if (intrinsicWidth > 0 && intrinsicHeight > 0) {
                y(this.f14227e, intrinsicWidth / intrinsicHeight);
                this.f14231q.setImageDrawable(drawable);
                this.f14231q.setVisibility(0);
                return true;
            }
        }
        return false;
    }

    private static void B(AspectRatioFrameLayout aspectRatioFrameLayout, int i10) {
        aspectRatioFrameLayout.setResizeMode(i10);
    }

    private boolean C() {
        Player player = this.f14238x;
        if (player == null) {
            return true;
        }
        int O = player.O();
        if (this.G) {
            if (O == 1 || O == 4 || !this.f14238x.B()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void E(boolean z10) {
        int i10;
        if (!N()) {
            return;
        }
        PlayerControlView playerControlView = this.f14235u;
        if (z10) {
            i10 = 0;
        } else {
            i10 = this.F;
        }
        playerControlView.setShowTimeoutMs(i10);
        this.f14235u.J();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F() {
        if (N() && this.f14238x != null) {
            if (!this.f14235u.D()) {
                x(true);
            } else if (this.I) {
                this.f14235u.A();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G() {
        VideoSize videoSize;
        float f10;
        Player player = this.f14238x;
        if (player != null) {
            videoSize = player.G();
        } else {
            videoSize = VideoSize.f14513p;
        }
        int i10 = videoSize.f14519d;
        int i11 = videoSize.f14520e;
        int i12 = videoSize.f14521i;
        float f11 = 0.0f;
        if (i11 != 0 && i10 != 0) {
            f10 = (i10 * videoSize.f14522o) / i11;
        } else {
            f10 = 0.0f;
        }
        View view = this.f14229o;
        if (view instanceof TextureView) {
            if (f10 > 0.0f && (i12 == 90 || i12 == 270)) {
                f10 = 1.0f / f10;
            }
            if (this.J != 0) {
                view.removeOnLayoutChangeListener(this.f14226d);
            }
            this.J = i12;
            if (i12 != 0) {
                this.f14229o.addOnLayoutChangeListener(this.f14226d);
            }
            o((TextureView) this.f14229o, this.J);
        }
        AspectRatioFrameLayout aspectRatioFrameLayout = this.f14227e;
        if (!this.f14230p) {
            f11 = f10;
        }
        y(aspectRatioFrameLayout, f11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x001d, code lost:
        if (r4.f14238x.B() == false) goto L18;
     */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0026  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void H() {
        /*
            r4 = this;
            android.view.View r0 = r4.f14233s
            if (r0 == 0) goto L2b
            com.google.android.exoplayer2.Player r0 = r4.f14238x
            r1 = 0
            if (r0 == 0) goto L20
            int r0 = r0.O()
            r2 = 2
            if (r0 != r2) goto L20
            int r0 = r4.C
            r3 = 1
            if (r0 == r2) goto L21
            if (r0 != r3) goto L20
            com.google.android.exoplayer2.Player r0 = r4.f14238x
            boolean r0 = r0.B()
            if (r0 == 0) goto L20
            goto L21
        L20:
            r3 = r1
        L21:
            android.view.View r0 = r4.f14233s
            if (r3 == 0) goto L26
            goto L28
        L26:
            r1 = 8
        L28:
            r0.setVisibility(r1)
        L2b:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.PlayerView.H():void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void I() {
        PlayerControlView playerControlView = this.f14235u;
        String str = null;
        if (playerControlView != null && this.f14239y) {
            if (playerControlView.getVisibility() == 0) {
                if (this.I) {
                    str = getResources().getString(m.f33147a);
                }
                setContentDescription(str);
                return;
            }
            setContentDescription(getResources().getString(m.f33151e));
            return;
        }
        setContentDescription(null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void J() {
        if (w() && this.H) {
            u();
        } else {
            x(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void K() {
        TextView textView = this.f14234t;
        if (textView != null) {
            CharSequence charSequence = this.E;
            if (charSequence != null) {
                textView.setText(charSequence);
                this.f14234t.setVisibility(0);
                return;
            }
            Player player = this.f14238x;
            if (player != null) {
                player.m();
            }
            this.f14234t.setVisibility(8);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void L(boolean z10) {
        Player player = this.f14238x;
        if (player != null && player.s(30) && !player.o().c()) {
            if (z10 && !this.D) {
                p();
            }
            if (player.o().d(2)) {
                t();
                return;
            }
            p();
            if (!M() || (!z(player.Y()) && !A(this.B))) {
                t();
            }
        } else if (!this.D) {
            t();
            p();
        }
    }

    private boolean M() {
        if (this.A) {
            ne.a.i(this.f14231q);
            return true;
        }
        return false;
    }

    private boolean N() {
        if (this.f14239y) {
            ne.a.i(this.f14235u);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void o(TextureView textureView, int i10) {
        Matrix matrix = new Matrix();
        float width = textureView.getWidth();
        float height = textureView.getHeight();
        if (width != 0.0f && height != 0.0f && i10 != 0) {
            float f10 = width / 2.0f;
            float f11 = height / 2.0f;
            matrix.postRotate(i10, f10, f11);
            RectF rectF = new RectF(0.0f, 0.0f, width, height);
            RectF rectF2 = new RectF();
            matrix.mapRect(rectF2, rectF);
            matrix.postScale(width / rectF2.width(), height / rectF2.height(), f10, f11);
        }
        textureView.setTransform(matrix);
    }

    private void p() {
        View view = this.f14228i;
        if (view != null) {
            view.setVisibility(0);
        }
    }

    private static void q(Context context, Resources resources, ImageView imageView) {
        imageView.setImageDrawable(w0.W(context, resources, ke.i.f33118f));
        imageView.setBackgroundColor(resources.getColor(ke.h.f33112a));
    }

    private static void r(Context context, Resources resources, ImageView imageView) {
        imageView.setImageDrawable(w0.W(context, resources, ke.i.f33118f));
        imageView.setBackgroundColor(resources.getColor(ke.h.f33112a, null));
    }

    private void t() {
        ImageView imageView = this.f14231q;
        if (imageView != null) {
            imageView.setImageResource(17170445);
            this.f14231q.setVisibility(4);
        }
    }

    private boolean v(int i10) {
        return i10 == 19 || i10 == 270 || i10 == 22 || i10 == 271 || i10 == 20 || i10 == 269 || i10 == 21 || i10 == 268 || i10 == 23;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean w() {
        Player player = this.f14238x;
        if (player != null && player.f() && this.f14238x.B()) {
            return true;
        }
        return false;
    }

    private void x(boolean z10) {
        boolean z11;
        if ((!w() || !this.H) && N()) {
            if (this.f14235u.D() && this.f14235u.getShowTimeoutMs() <= 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            boolean C = C();
            if (z10 || z11 || C) {
                E(C);
            }
        }
    }

    private boolean z(MediaMetadata mediaMetadata) {
        byte[] bArr = mediaMetadata.f12911u;
        if (bArr == null) {
            return false;
        }
        return A(new BitmapDrawable(getResources(), BitmapFactory.decodeByteArray(bArr, 0, bArr.length)));
    }

    public void D() {
        E(C());
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        Player player = this.f14238x;
        if (player != null && player.f()) {
            return super.dispatchKeyEvent(keyEvent);
        }
        boolean v10 = v(keyEvent.getKeyCode());
        if (v10 && N() && !this.f14235u.D()) {
            x(true);
            return true;
        } else if (!s(keyEvent) && !super.dispatchKeyEvent(keyEvent)) {
            if (v10 && N()) {
                x(true);
            }
            return false;
        } else {
            x(true);
            return true;
        }
    }

    public List<ke.a> getAdOverlayInfos() {
        ArrayList arrayList = new ArrayList();
        FrameLayout frameLayout = this.f14237w;
        if (frameLayout != null) {
            arrayList.add(new ke.a(frameLayout, 4, "Transparent overlay does not impact viewability"));
        }
        PlayerControlView playerControlView = this.f14235u;
        if (playerControlView != null) {
            arrayList.add(new ke.a(playerControlView, 1));
        }
        return s.m(arrayList);
    }

    public ViewGroup getAdViewGroup() {
        return (ViewGroup) ne.a.j(this.f14236v, "exo_ad_overlay must be present for ad playback");
    }

    public boolean getControllerAutoShow() {
        return this.G;
    }

    public boolean getControllerHideOnTouch() {
        return this.I;
    }

    public int getControllerShowTimeoutMs() {
        return this.F;
    }

    public Drawable getDefaultArtwork() {
        return this.B;
    }

    public FrameLayout getOverlayFrameLayout() {
        return this.f14237w;
    }

    public Player getPlayer() {
        return this.f14238x;
    }

    public int getResizeMode() {
        ne.a.i(this.f14227e);
        return this.f14227e.getResizeMode();
    }

    public SubtitleView getSubtitleView() {
        return this.f14232r;
    }

    public boolean getUseArtwork() {
        return this.A;
    }

    public boolean getUseController() {
        return this.f14239y;
    }

    public View getVideoSurfaceView() {
        return this.f14229o;
    }

    @Override // android.view.View
    public boolean onTrackballEvent(MotionEvent motionEvent) {
        if (N() && this.f14238x != null) {
            x(true);
            return true;
        }
        return false;
    }

    @Override // android.view.View
    public boolean performClick() {
        F();
        return super.performClick();
    }

    public boolean s(KeyEvent keyEvent) {
        if (N() && this.f14235u.y(keyEvent)) {
            return true;
        }
        return false;
    }

    public void setAspectRatioListener(AspectRatioFrameLayout.b bVar) {
        ne.a.i(this.f14227e);
        this.f14227e.setAspectRatioListener(bVar);
    }

    public void setControllerAutoShow(boolean z10) {
        this.G = z10;
    }

    public void setControllerHideDuringAds(boolean z10) {
        this.H = z10;
    }

    public void setControllerHideOnTouch(boolean z10) {
        ne.a.i(this.f14235u);
        this.I = z10;
        I();
    }

    public void setControllerShowTimeoutMs(int i10) {
        ne.a.i(this.f14235u);
        this.F = i10;
        if (this.f14235u.D()) {
            D();
        }
    }

    public void setControllerVisibilityListener(PlayerControlView.e eVar) {
        ne.a.i(this.f14235u);
        PlayerControlView.e eVar2 = this.f14240z;
        if (eVar2 != eVar) {
            if (eVar2 != null) {
                this.f14235u.E(eVar2);
            }
            this.f14240z = eVar;
            if (eVar != null) {
                this.f14235u.w(eVar);
            }
        }
    }

    public void setCustomErrorMessage(CharSequence charSequence) {
        boolean z10;
        if (this.f14234t != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.E = charSequence;
        K();
    }

    public void setDefaultArtwork(Drawable drawable) {
        if (this.B != drawable) {
            this.B = drawable;
            L(false);
        }
    }

    public void setErrorMessageProvider(o oVar) {
        if (oVar != null) {
            K();
        }
    }

    public void setKeepContentOnPlayerReset(boolean z10) {
        if (this.D != z10) {
            this.D = z10;
            L(false);
        }
    }

    public void setPlayer(Player player) {
        boolean z10;
        boolean z11;
        if (Looper.myLooper() == Looper.getMainLooper()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (player != null && player.w() != Looper.getMainLooper()) {
            z11 = false;
        } else {
            z11 = true;
        }
        ne.a.a(z11);
        Player player2 = this.f14238x;
        if (player2 == player) {
            return;
        }
        if (player2 != null) {
            player2.h(this.f14226d);
            if (player2.s(27)) {
                View view = this.f14229o;
                if (view instanceof TextureView) {
                    player2.F((TextureView) view);
                } else if (view instanceof SurfaceView) {
                    player2.S((SurfaceView) view);
                }
            }
        }
        SubtitleView subtitleView = this.f14232r;
        if (subtitleView != null) {
            subtitleView.setCues(null);
        }
        this.f14238x = player;
        if (N()) {
            this.f14235u.setPlayer(player);
        }
        H();
        K();
        L(true);
        if (player != null) {
            if (player.s(27)) {
                View view2 = this.f14229o;
                if (view2 instanceof TextureView) {
                    player.y((TextureView) view2);
                } else if (view2 instanceof SurfaceView) {
                    player.j((SurfaceView) view2);
                }
                G();
            }
            if (this.f14232r != null && player.s(28)) {
                this.f14232r.setCues(player.q().f13995d);
            }
            player.L(this.f14226d);
            x(false);
            return;
        }
        u();
    }

    public void setRepeatToggleModes(int i10) {
        ne.a.i(this.f14235u);
        this.f14235u.setRepeatToggleModes(i10);
    }

    public void setResizeMode(int i10) {
        ne.a.i(this.f14227e);
        this.f14227e.setResizeMode(i10);
    }

    public void setShowBuffering(int i10) {
        if (this.C != i10) {
            this.C = i10;
            H();
        }
    }

    public void setShowFastForwardButton(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowFastForwardButton(z10);
    }

    public void setShowMultiWindowTimeBar(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowMultiWindowTimeBar(z10);
    }

    public void setShowNextButton(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowNextButton(z10);
    }

    public void setShowPreviousButton(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowPreviousButton(z10);
    }

    public void setShowRewindButton(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowRewindButton(z10);
    }

    public void setShowShuffleButton(boolean z10) {
        ne.a.i(this.f14235u);
        this.f14235u.setShowShuffleButton(z10);
    }

    public void setShutterBackgroundColor(int i10) {
        View view = this.f14228i;
        if (view != null) {
            view.setBackgroundColor(i10);
        }
    }

    public void setUseArtwork(boolean z10) {
        boolean z11;
        if (z10 && this.f14231q == null) {
            z11 = false;
        } else {
            z11 = true;
        }
        ne.a.g(z11);
        if (this.A != z10) {
            this.A = z10;
            L(false);
        }
    }

    public void setUseController(boolean z10) {
        boolean z11;
        boolean z12 = true;
        if (z10 && this.f14235u == null) {
            z11 = false;
        } else {
            z11 = true;
        }
        ne.a.g(z11);
        if (!z10 && !hasOnClickListeners()) {
            z12 = false;
        }
        setClickable(z12);
        if (this.f14239y == z10) {
            return;
        }
        this.f14239y = z10;
        if (N()) {
            this.f14235u.setPlayer(this.f14238x);
        } else {
            PlayerControlView playerControlView = this.f14235u;
            if (playerControlView != null) {
                playerControlView.A();
                this.f14235u.setPlayer(null);
            }
        }
        I();
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        super.setVisibility(i10);
        View view = this.f14229o;
        if (view instanceof SurfaceView) {
            view.setVisibility(i10);
        }
    }

    public void u() {
        PlayerControlView playerControlView = this.f14235u;
        if (playerControlView != null) {
            playerControlView.A();
        }
    }

    protected void y(AspectRatioFrameLayout aspectRatioFrameLayout, float f10) {
        if (aspectRatioFrameLayout != null) {
            aspectRatioFrameLayout.setAspectRatio(f10);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public PlayerView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        int i11;
        boolean z10;
        int i12;
        int i13;
        boolean z11;
        boolean z12;
        int i14;
        int i15;
        boolean z13;
        int i16;
        boolean z14;
        boolean z15;
        boolean z16;
        int i17;
        boolean z17;
        a aVar = new a();
        this.f14226d = aVar;
        if (isInEditMode()) {
            this.f14227e = null;
            this.f14228i = null;
            this.f14229o = null;
            this.f14230p = false;
            this.f14231q = null;
            this.f14232r = null;
            this.f14233s = null;
            this.f14234t = null;
            this.f14235u = null;
            this.f14236v = null;
            this.f14237w = null;
            ImageView imageView = new ImageView(context);
            if (w0.f40295a >= 23) {
                r(context, getResources(), imageView);
            } else {
                q(context, getResources(), imageView);
            }
            addView(imageView);
            return;
        }
        int i18 = l.f33146c;
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, n.H, i10, 0);
            try {
                boolean hasValue = obtainStyledAttributes.hasValue(n.R);
                int color = obtainStyledAttributes.getColor(n.R, 0);
                int resourceId = obtainStyledAttributes.getResourceId(n.N, i18);
                boolean z18 = obtainStyledAttributes.getBoolean(n.T, true);
                int resourceId2 = obtainStyledAttributes.getResourceId(n.J, 0);
                boolean z19 = obtainStyledAttributes.getBoolean(n.U, true);
                int i19 = obtainStyledAttributes.getInt(n.S, 1);
                int i20 = obtainStyledAttributes.getInt(n.O, 0);
                int i21 = obtainStyledAttributes.getInt(n.Q, 5000);
                boolean z20 = obtainStyledAttributes.getBoolean(n.L, true);
                boolean z21 = obtainStyledAttributes.getBoolean(n.I, true);
                i13 = obtainStyledAttributes.getInteger(n.P, 0);
                this.D = obtainStyledAttributes.getBoolean(n.M, this.D);
                boolean z22 = obtainStyledAttributes.getBoolean(n.K, true);
                obtainStyledAttributes.recycle();
                i18 = resourceId;
                i11 = i21;
                z11 = z22;
                z12 = z20;
                z10 = z21;
                i12 = i20;
                z15 = hasValue;
                i14 = i19;
                z14 = z19;
                i16 = resourceId2;
                z13 = z18;
                i15 = color;
            } catch (Throwable th2) {
                obtainStyledAttributes.recycle();
                throw th2;
            }
        } else {
            i11 = 5000;
            z10 = true;
            i12 = 0;
            i13 = 0;
            z11 = true;
            z12 = true;
            i14 = 1;
            i15 = 0;
            z13 = true;
            i16 = 0;
            z14 = true;
            z15 = false;
        }
        LayoutInflater.from(context).inflate(i18, this);
        setDescendantFocusability(262144);
        AspectRatioFrameLayout aspectRatioFrameLayout = (AspectRatioFrameLayout) findViewById(ke.j.f33122d);
        this.f14227e = aspectRatioFrameLayout;
        if (aspectRatioFrameLayout != null) {
            B(aspectRatioFrameLayout, i12);
        }
        View findViewById = findViewById(ke.j.f33139u);
        this.f14228i = findViewById;
        if (findViewById != null && z15) {
            findViewById.setBackgroundColor(i15);
        }
        if (aspectRatioFrameLayout != null && i14 != 0) {
            ViewGroup.LayoutParams layoutParams = new ViewGroup.LayoutParams(-1, -1);
            if (i14 == 2) {
                this.f14229o = new TextureView(context);
            } else if (i14 == 3) {
                try {
                    int i22 = pe.l.f45098x;
                    this.f14229o = (View) pe.l.class.getConstructor(Context.class).newInstance(context);
                    z17 = true;
                    this.f14229o.setLayoutParams(layoutParams);
                    this.f14229o.setOnClickListener(aVar);
                    this.f14229o.setClickable(false);
                    aspectRatioFrameLayout.addView(this.f14229o, 0);
                    z16 = z17;
                } catch (Exception e10) {
                    throw new IllegalStateException("spherical_gl_surface_view requires an ExoPlayer dependency", e10);
                }
            } else if (i14 != 4) {
                this.f14229o = new SurfaceView(context);
            } else {
                try {
                    int i23 = oe.j.f42642e;
                    this.f14229o = (View) oe.j.class.getConstructor(Context.class).newInstance(context);
                } catch (Exception e11) {
                    throw new IllegalStateException("video_decoder_gl_surface_view requires an ExoPlayer dependency", e11);
                }
            }
            z17 = false;
            this.f14229o.setLayoutParams(layoutParams);
            this.f14229o.setOnClickListener(aVar);
            this.f14229o.setClickable(false);
            aspectRatioFrameLayout.addView(this.f14229o, 0);
            z16 = z17;
        } else {
            this.f14229o = null;
            z16 = false;
        }
        this.f14230p = z16;
        this.f14236v = (FrameLayout) findViewById(ke.j.f33119a);
        this.f14237w = (FrameLayout) findViewById(ke.j.f33129k);
        ImageView imageView2 = (ImageView) findViewById(ke.j.f33120b);
        this.f14231q = imageView2;
        this.A = z13 && imageView2 != null;
        if (i16 != 0) {
            this.B = androidx.core.content.a.e(getContext(), i16);
        }
        SubtitleView subtitleView = (SubtitleView) findViewById(ke.j.f33140v);
        this.f14232r = subtitleView;
        if (subtitleView != null) {
            subtitleView.d();
            subtitleView.e();
        }
        View findViewById2 = findViewById(ke.j.f33121c);
        this.f14233s = findViewById2;
        if (findViewById2 != null) {
            findViewById2.setVisibility(8);
        }
        this.C = i13;
        TextView textView = (TextView) findViewById(ke.j.f33126h);
        this.f14234t = textView;
        if (textView != null) {
            textView.setVisibility(8);
        }
        PlayerControlView playerControlView = (PlayerControlView) findViewById(ke.j.f33123e);
        View findViewById3 = findViewById(ke.j.f33124f);
        if (playerControlView != null) {
            this.f14235u = playerControlView;
            i17 = 0;
        } else if (findViewById3 != null) {
            i17 = 0;
            PlayerControlView playerControlView2 = new PlayerControlView(context, null, 0, attributeSet);
            this.f14235u = playerControlView2;
            playerControlView2.setId(ke.j.f33123e);
            playerControlView2.setLayoutParams(findViewById3.getLayoutParams());
            ViewGroup viewGroup = (ViewGroup) findViewById3.getParent();
            int indexOfChild = viewGroup.indexOfChild(findViewById3);
            viewGroup.removeView(findViewById3);
            viewGroup.addView(playerControlView2, indexOfChild);
        } else {
            i17 = 0;
            this.f14235u = null;
        }
        PlayerControlView playerControlView3 = this.f14235u;
        this.F = playerControlView3 != null ? i11 : i17;
        this.I = z12;
        this.G = z10;
        this.H = z11;
        this.f14239y = (!z14 || playerControlView3 == null) ? i17 : 1;
        if (playerControlView3 != null) {
            playerControlView3.A();
            this.f14235u.w(aVar);
        }
        if (z14) {
            setClickable(true);
        }
        I();
    }
}
