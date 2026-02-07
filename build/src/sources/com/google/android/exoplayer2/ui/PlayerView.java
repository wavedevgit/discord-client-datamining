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
import ke.l;
import ke.m;
import ke.n;
import ne.o;
import ne.w0;
import ni.s;
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
    private final a f13169d;

    /* renamed from: e  reason: collision with root package name */
    private final AspectRatioFrameLayout f13170e;

    /* renamed from: i  reason: collision with root package name */
    private final View f13171i;

    /* renamed from: o  reason: collision with root package name */
    private final View f13172o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f13173p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageView f13174q;

    /* renamed from: r  reason: collision with root package name */
    private final SubtitleView f13175r;

    /* renamed from: s  reason: collision with root package name */
    private final View f13176s;

    /* renamed from: t  reason: collision with root package name */
    private final TextView f13177t;

    /* renamed from: u  reason: collision with root package name */
    private final PlayerControlView f13178u;

    /* renamed from: v  reason: collision with root package name */
    private final FrameLayout f13179v;

    /* renamed from: w  reason: collision with root package name */
    private final FrameLayout f13180w;

    /* renamed from: x  reason: collision with root package name */
    private Player f13181x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f13182y;

    /* renamed from: z  reason: collision with root package name */
    private PlayerControlView.e f13183z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements Player.b, View.OnLayoutChangeListener, View.OnClickListener, PlayerControlView.e {

        /* renamed from: d  reason: collision with root package name */
        private final Timeline.b f13184d = new Timeline.b();

        /* renamed from: e  reason: collision with root package name */
        private Object f13185e;

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
            if (PlayerView.this.f13175r != null) {
                PlayerView.this.f13175r.setCues(cueGroup.f12938d);
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
            if (PlayerView.this.f13171i != null) {
                PlayerView.this.f13171i.setVisibility(4);
            }
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onTracksChanged(Tracks tracks) {
            Player player = (Player) ne.a.e(PlayerView.this.f13181x);
            Timeline v10 = player.v();
            if (v10.u()) {
                this.f13185e = null;
            } else if (!player.o().c()) {
                this.f13185e = v10.k(player.E(), this.f13184d, true).f11876e;
            } else {
                Object obj = this.f13185e;
                if (obj != null) {
                    int f10 = v10.f(obj);
                    if (f10 != -1) {
                        if (player.Q() == v10.j(f10, this.f13184d).f11877i) {
                            return;
                        }
                    }
                    this.f13185e = null;
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
                y(this.f13170e, intrinsicWidth / intrinsicHeight);
                this.f13174q.setImageDrawable(drawable);
                this.f13174q.setVisibility(0);
                return true;
            }
        }
        return false;
    }

    private static void B(AspectRatioFrameLayout aspectRatioFrameLayout, int i10) {
        aspectRatioFrameLayout.setResizeMode(i10);
    }

    private boolean C() {
        Player player = this.f13181x;
        if (player == null) {
            return true;
        }
        int O = player.O();
        if (this.G) {
            if (O == 1 || O == 4 || !this.f13181x.B()) {
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
        PlayerControlView playerControlView = this.f13178u;
        if (z10) {
            i10 = 0;
        } else {
            i10 = this.F;
        }
        playerControlView.setShowTimeoutMs(i10);
        this.f13178u.J();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F() {
        if (N() && this.f13181x != null) {
            if (!this.f13178u.D()) {
                x(true);
            } else if (this.I) {
                this.f13178u.A();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G() {
        VideoSize videoSize;
        float f10;
        Player player = this.f13181x;
        if (player != null) {
            videoSize = player.G();
        } else {
            videoSize = VideoSize.f13456p;
        }
        int i10 = videoSize.f13462d;
        int i11 = videoSize.f13463e;
        int i12 = videoSize.f13464i;
        float f11 = 0.0f;
        if (i11 != 0 && i10 != 0) {
            f10 = (i10 * videoSize.f13465o) / i11;
        } else {
            f10 = 0.0f;
        }
        View view = this.f13172o;
        if (view instanceof TextureView) {
            if (f10 > 0.0f && (i12 == 90 || i12 == 270)) {
                f10 = 1.0f / f10;
            }
            if (this.J != 0) {
                view.removeOnLayoutChangeListener(this.f13169d);
            }
            this.J = i12;
            if (i12 != 0) {
                this.f13172o.addOnLayoutChangeListener(this.f13169d);
            }
            o((TextureView) this.f13172o, this.J);
        }
        AspectRatioFrameLayout aspectRatioFrameLayout = this.f13170e;
        if (!this.f13173p) {
            f11 = f10;
        }
        y(aspectRatioFrameLayout, f11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x001d, code lost:
        if (r4.f13181x.B() == false) goto L18;
     */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0026  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void H() {
        /*
            r4 = this;
            android.view.View r0 = r4.f13176s
            if (r0 == 0) goto L2b
            com.google.android.exoplayer2.Player r0 = r4.f13181x
            r1 = 0
            if (r0 == 0) goto L20
            int r0 = r0.O()
            r2 = 2
            if (r0 != r2) goto L20
            int r0 = r4.C
            r3 = 1
            if (r0 == r2) goto L21
            if (r0 != r3) goto L20
            com.google.android.exoplayer2.Player r0 = r4.f13181x
            boolean r0 = r0.B()
            if (r0 == 0) goto L20
            goto L21
        L20:
            r3 = r1
        L21:
            android.view.View r0 = r4.f13176s
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
        PlayerControlView playerControlView = this.f13178u;
        String str = null;
        if (playerControlView != null && this.f13182y) {
            if (playerControlView.getVisibility() == 0) {
                if (this.I) {
                    str = getResources().getString(m.f31646a);
                }
                setContentDescription(str);
                return;
            }
            setContentDescription(getResources().getString(m.f31650e));
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
        TextView textView = this.f13177t;
        if (textView != null) {
            CharSequence charSequence = this.E;
            if (charSequence != null) {
                textView.setText(charSequence);
                this.f13177t.setVisibility(0);
                return;
            }
            Player player = this.f13181x;
            if (player != null) {
                player.m();
            }
            this.f13177t.setVisibility(8);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void L(boolean z10) {
        Player player = this.f13181x;
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
            ne.a.i(this.f13174q);
            return true;
        }
        return false;
    }

    private boolean N() {
        if (this.f13182y) {
            ne.a.i(this.f13178u);
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
        View view = this.f13171i;
        if (view != null) {
            view.setVisibility(0);
        }
    }

    private static void q(Context context, Resources resources, ImageView imageView) {
        imageView.setImageDrawable(w0.W(context, resources, ke.i.f31617f));
        imageView.setBackgroundColor(resources.getColor(ke.h.f31611a));
    }

    private static void r(Context context, Resources resources, ImageView imageView) {
        imageView.setImageDrawable(w0.W(context, resources, ke.i.f31617f));
        imageView.setBackgroundColor(resources.getColor(ke.h.f31611a, null));
    }

    private void t() {
        ImageView imageView = this.f13174q;
        if (imageView != null) {
            imageView.setImageResource(17170445);
            this.f13174q.setVisibility(4);
        }
    }

    private boolean v(int i10) {
        return i10 == 19 || i10 == 270 || i10 == 22 || i10 == 271 || i10 == 20 || i10 == 269 || i10 == 21 || i10 == 268 || i10 == 23;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean w() {
        Player player = this.f13181x;
        if (player != null && player.f() && this.f13181x.B()) {
            return true;
        }
        return false;
    }

    private void x(boolean z10) {
        boolean z11;
        if ((!w() || !this.H) && N()) {
            if (this.f13178u.D() && this.f13178u.getShowTimeoutMs() <= 0) {
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
        byte[] bArr = mediaMetadata.f11792u;
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
        Player player = this.f13181x;
        if (player != null && player.f()) {
            return super.dispatchKeyEvent(keyEvent);
        }
        boolean v10 = v(keyEvent.getKeyCode());
        if (v10 && N() && !this.f13178u.D()) {
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
        FrameLayout frameLayout = this.f13180w;
        if (frameLayout != null) {
            arrayList.add(new ke.a(frameLayout, 4, "Transparent overlay does not impact viewability"));
        }
        PlayerControlView playerControlView = this.f13178u;
        if (playerControlView != null) {
            arrayList.add(new ke.a(playerControlView, 1));
        }
        return s.o(arrayList);
    }

    public ViewGroup getAdViewGroup() {
        return (ViewGroup) ne.a.j(this.f13179v, "exo_ad_overlay must be present for ad playback");
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
        return this.f13180w;
    }

    public Player getPlayer() {
        return this.f13181x;
    }

    public int getResizeMode() {
        ne.a.i(this.f13170e);
        return this.f13170e.getResizeMode();
    }

    public SubtitleView getSubtitleView() {
        return this.f13175r;
    }

    public boolean getUseArtwork() {
        return this.A;
    }

    public boolean getUseController() {
        return this.f13182y;
    }

    public View getVideoSurfaceView() {
        return this.f13172o;
    }

    @Override // android.view.View
    public boolean onTrackballEvent(MotionEvent motionEvent) {
        if (N() && this.f13181x != null) {
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
        if (N() && this.f13178u.y(keyEvent)) {
            return true;
        }
        return false;
    }

    public void setAspectRatioListener(AspectRatioFrameLayout.b bVar) {
        ne.a.i(this.f13170e);
        this.f13170e.setAspectRatioListener(bVar);
    }

    public void setControllerAutoShow(boolean z10) {
        this.G = z10;
    }

    public void setControllerHideDuringAds(boolean z10) {
        this.H = z10;
    }

    public void setControllerHideOnTouch(boolean z10) {
        ne.a.i(this.f13178u);
        this.I = z10;
        I();
    }

    public void setControllerShowTimeoutMs(int i10) {
        ne.a.i(this.f13178u);
        this.F = i10;
        if (this.f13178u.D()) {
            D();
        }
    }

    public void setControllerVisibilityListener(PlayerControlView.e eVar) {
        ne.a.i(this.f13178u);
        PlayerControlView.e eVar2 = this.f13183z;
        if (eVar2 != eVar) {
            if (eVar2 != null) {
                this.f13178u.E(eVar2);
            }
            this.f13183z = eVar;
            if (eVar != null) {
                this.f13178u.w(eVar);
            }
        }
    }

    public void setCustomErrorMessage(CharSequence charSequence) {
        boolean z10;
        if (this.f13177t != null) {
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
        Player player2 = this.f13181x;
        if (player2 == player) {
            return;
        }
        if (player2 != null) {
            player2.h(this.f13169d);
            if (player2.s(27)) {
                View view = this.f13172o;
                if (view instanceof TextureView) {
                    player2.F((TextureView) view);
                } else if (view instanceof SurfaceView) {
                    player2.S((SurfaceView) view);
                }
            }
        }
        SubtitleView subtitleView = this.f13175r;
        if (subtitleView != null) {
            subtitleView.setCues(null);
        }
        this.f13181x = player;
        if (N()) {
            this.f13178u.setPlayer(player);
        }
        H();
        K();
        L(true);
        if (player != null) {
            if (player.s(27)) {
                View view2 = this.f13172o;
                if (view2 instanceof TextureView) {
                    player.y((TextureView) view2);
                } else if (view2 instanceof SurfaceView) {
                    player.j((SurfaceView) view2);
                }
                G();
            }
            if (this.f13175r != null && player.s(28)) {
                this.f13175r.setCues(player.q().f12938d);
            }
            player.L(this.f13169d);
            x(false);
            return;
        }
        u();
    }

    public void setRepeatToggleModes(int i10) {
        ne.a.i(this.f13178u);
        this.f13178u.setRepeatToggleModes(i10);
    }

    public void setResizeMode(int i10) {
        ne.a.i(this.f13170e);
        this.f13170e.setResizeMode(i10);
    }

    public void setShowBuffering(int i10) {
        if (this.C != i10) {
            this.C = i10;
            H();
        }
    }

    public void setShowFastForwardButton(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowFastForwardButton(z10);
    }

    public void setShowMultiWindowTimeBar(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowMultiWindowTimeBar(z10);
    }

    public void setShowNextButton(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowNextButton(z10);
    }

    public void setShowPreviousButton(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowPreviousButton(z10);
    }

    public void setShowRewindButton(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowRewindButton(z10);
    }

    public void setShowShuffleButton(boolean z10) {
        ne.a.i(this.f13178u);
        this.f13178u.setShowShuffleButton(z10);
    }

    public void setShutterBackgroundColor(int i10) {
        View view = this.f13171i;
        if (view != null) {
            view.setBackgroundColor(i10);
        }
    }

    public void setUseArtwork(boolean z10) {
        boolean z11;
        if (z10 && this.f13174q == null) {
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
        if (z10 && this.f13178u == null) {
            z11 = false;
        } else {
            z11 = true;
        }
        ne.a.g(z11);
        if (!z10 && !hasOnClickListeners()) {
            z12 = false;
        }
        setClickable(z12);
        if (this.f13182y == z10) {
            return;
        }
        this.f13182y = z10;
        if (N()) {
            this.f13178u.setPlayer(this.f13181x);
        } else {
            PlayerControlView playerControlView = this.f13178u;
            if (playerControlView != null) {
                playerControlView.A();
                this.f13178u.setPlayer(null);
            }
        }
        I();
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        super.setVisibility(i10);
        View view = this.f13172o;
        if (view instanceof SurfaceView) {
            view.setVisibility(i10);
        }
    }

    public void u() {
        PlayerControlView playerControlView = this.f13178u;
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
        this.f13169d = aVar;
        if (isInEditMode()) {
            this.f13170e = null;
            this.f13171i = null;
            this.f13172o = null;
            this.f13173p = false;
            this.f13174q = null;
            this.f13175r = null;
            this.f13176s = null;
            this.f13177t = null;
            this.f13178u = null;
            this.f13179v = null;
            this.f13180w = null;
            ImageView imageView = new ImageView(context);
            if (w0.f39060a >= 23) {
                r(context, getResources(), imageView);
            } else {
                q(context, getResources(), imageView);
            }
            addView(imageView);
            return;
        }
        int i18 = l.f31645c;
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
        AspectRatioFrameLayout aspectRatioFrameLayout = (AspectRatioFrameLayout) findViewById(ke.j.f31621d);
        this.f13170e = aspectRatioFrameLayout;
        if (aspectRatioFrameLayout != null) {
            B(aspectRatioFrameLayout, i12);
        }
        View findViewById = findViewById(ke.j.f31638u);
        this.f13171i = findViewById;
        if (findViewById != null && z15) {
            findViewById.setBackgroundColor(i15);
        }
        if (aspectRatioFrameLayout != null && i14 != 0) {
            ViewGroup.LayoutParams layoutParams = new ViewGroup.LayoutParams(-1, -1);
            if (i14 == 2) {
                this.f13172o = new TextureView(context);
            } else if (i14 == 3) {
                try {
                    int i22 = pe.l.f43905x;
                    this.f13172o = (View) pe.l.class.getConstructor(Context.class).newInstance(context);
                    z17 = true;
                    this.f13172o.setLayoutParams(layoutParams);
                    this.f13172o.setOnClickListener(aVar);
                    this.f13172o.setClickable(false);
                    aspectRatioFrameLayout.addView(this.f13172o, 0);
                    z16 = z17;
                } catch (Exception e10) {
                    throw new IllegalStateException("spherical_gl_surface_view requires an ExoPlayer dependency", e10);
                }
            } else if (i14 != 4) {
                this.f13172o = new SurfaceView(context);
            } else {
                try {
                    int i23 = oe.j.f41747e;
                    this.f13172o = (View) oe.j.class.getConstructor(Context.class).newInstance(context);
                } catch (Exception e11) {
                    throw new IllegalStateException("video_decoder_gl_surface_view requires an ExoPlayer dependency", e11);
                }
            }
            z17 = false;
            this.f13172o.setLayoutParams(layoutParams);
            this.f13172o.setOnClickListener(aVar);
            this.f13172o.setClickable(false);
            aspectRatioFrameLayout.addView(this.f13172o, 0);
            z16 = z17;
        } else {
            this.f13172o = null;
            z16 = false;
        }
        this.f13173p = z16;
        this.f13179v = (FrameLayout) findViewById(ke.j.f31618a);
        this.f13180w = (FrameLayout) findViewById(ke.j.f31628k);
        ImageView imageView2 = (ImageView) findViewById(ke.j.f31619b);
        this.f13174q = imageView2;
        this.A = z13 && imageView2 != null;
        if (i16 != 0) {
            this.B = androidx.core.content.a.e(getContext(), i16);
        }
        SubtitleView subtitleView = (SubtitleView) findViewById(ke.j.f31639v);
        this.f13175r = subtitleView;
        if (subtitleView != null) {
            subtitleView.d();
            subtitleView.e();
        }
        View findViewById2 = findViewById(ke.j.f31620c);
        this.f13176s = findViewById2;
        if (findViewById2 != null) {
            findViewById2.setVisibility(8);
        }
        this.C = i13;
        TextView textView = (TextView) findViewById(ke.j.f31625h);
        this.f13177t = textView;
        if (textView != null) {
            textView.setVisibility(8);
        }
        PlayerControlView playerControlView = (PlayerControlView) findViewById(ke.j.f31622e);
        View findViewById3 = findViewById(ke.j.f31623f);
        if (playerControlView != null) {
            this.f13178u = playerControlView;
            i17 = 0;
        } else if (findViewById3 != null) {
            i17 = 0;
            PlayerControlView playerControlView2 = new PlayerControlView(context, null, 0, attributeSet);
            this.f13178u = playerControlView2;
            playerControlView2.setId(ke.j.f31622e);
            playerControlView2.setLayoutParams(findViewById3.getLayoutParams());
            ViewGroup viewGroup = (ViewGroup) findViewById3.getParent();
            int indexOfChild = viewGroup.indexOfChild(findViewById3);
            viewGroup.removeView(findViewById3);
            viewGroup.addView(playerControlView2, indexOfChild);
        } else {
            i17 = 0;
            this.f13178u = null;
        }
        PlayerControlView playerControlView3 = this.f13178u;
        this.F = playerControlView3 != null ? i11 : i17;
        this.I = z12;
        this.G = z10;
        this.H = z11;
        this.f13182y = (!z14 || playerControlView3 == null) ? i17 : 1;
        if (playerControlView3 != null) {
            playerControlView3.A();
            this.f13178u.w(aVar);
        }
        if (z14) {
            setClickable(true);
        }
        I();
    }
}
