package com.brentvatne.exoplayer;

import android.content.Context;
import android.util.AttributeSet;
import android.view.SurfaceView;
import android.view.TextureView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.ui.SubtitleView;
import com.google.android.exoplayer2.video.VideoSize;
import java.util.List;
import zd.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private View f9331d;

    /* renamed from: e  reason: collision with root package name */
    private final View f9332e;

    /* renamed from: i  reason: collision with root package name */
    private final SubtitleView f9333i;

    /* renamed from: o  reason: collision with root package name */
    private final com.brentvatne.exoplayer.a f9334o;

    /* renamed from: p  reason: collision with root package name */
    private final b f9335p;

    /* renamed from: q  reason: collision with root package name */
    private SimpleExoPlayer f9336q;

    /* renamed from: r  reason: collision with root package name */
    private Context f9337r;

    /* renamed from: s  reason: collision with root package name */
    private ViewGroup.LayoutParams f9338s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f9339t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f9340u;

    /* renamed from: v  reason: collision with root package name */
    private final Runnable f9341v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            d dVar = d.this;
            dVar.measure(View.MeasureSpec.makeMeasureSpec(dVar.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(d.this.getHeight(), 1073741824));
            d dVar2 = d.this;
            dVar2.layout(dVar2.getLeft(), d.this.getTop(), d.this.getRight(), d.this.getBottom());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class b implements Player.b, m {
        @Override // com.google.android.exoplayer2.Player.b, zd.m
        public void onCues(CueGroup cueGroup) {
            d.this.f9333i.setCues(cueGroup.f13995d);
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onLoadingChanged(boolean z10) {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlayerError(PlaybackException playbackException) {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPlayerStateChanged(boolean z10, int i10) {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPositionDiscontinuity(int i10) {
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onRenderedFirstFrame() {
            d.this.f9332e.setVisibility(4);
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
            d.this.i();
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onVideoSizeChanged(VideoSize videoSize) {
            boolean z10;
            float f10;
            if (videoSize.f14519d != 0 || videoSize.f14520e != 0) {
                if (d.this.f9334o.getAspectRatio() == 0.0f) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                com.brentvatne.exoplayer.a aVar = d.this.f9334o;
                int i10 = videoSize.f14520e;
                if (i10 == 0) {
                    f10 = 1.0f;
                } else {
                    f10 = (videoSize.f14519d * videoSize.f14522o) / i10;
                }
                aVar.setAspectRatio(f10);
                if (z10) {
                    d dVar = d.this;
                    dVar.post(dVar.f9341v);
                }
            }
        }

        private b() {
        }

        @Override // com.google.android.exoplayer2.Player.b, zd.m
        public void onCues(List list) {
            d.this.f9333i.setCues(list);
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        }
    }

    public d(Context context) {
        this(context, null);
    }

    private void f() {
        View view = this.f9331d;
        if (view instanceof TextureView) {
            this.f9336q.F((TextureView) view);
        } else if (view instanceof SurfaceView) {
            this.f9336q.S((SurfaceView) view);
        }
    }

    private void h() {
        View view = this.f9331d;
        if (view instanceof TextureView) {
            this.f9336q.y((TextureView) view);
        } else if (view instanceof SurfaceView) {
            this.f9336q.j((SurfaceView) view);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i() {
        SimpleExoPlayer simpleExoPlayer = this.f9336q;
        if (simpleExoPlayer != null) {
            je.m t02 = simpleExoPlayer.t0();
            for (int i10 = 0; i10 < t02.f31983a; i10++) {
                if (this.f9336q.w0(i10) == 2 && t02.a(i10) != null) {
                    return;
                }
            }
            this.f9332e.setVisibility(0);
        }
    }

    private void j() {
        int i10;
        View view = this.f9332e;
        if (this.f9340u) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        view.setVisibility(i10);
    }

    private void k() {
        View surfaceView;
        if (this.f9339t) {
            surfaceView = new TextureView(this.f9337r);
        } else {
            surfaceView = new SurfaceView(this.f9337r);
        }
        surfaceView.setLayoutParams(this.f9338s);
        this.f9331d = surfaceView;
        if (this.f9334o.getChildAt(0) != null) {
            this.f9334o.removeViewAt(0);
        }
        this.f9334o.addView(this.f9331d, 0, this.f9338s);
        if (this.f9336q != null) {
            h();
        }
    }

    public void g() {
        this.f9334o.a();
    }

    public View getVideoSurfaceView() {
        return this.f9331d;
    }

    public void setHideShutterView(boolean z10) {
        this.f9340u = z10;
        j();
    }

    public void setPlayer(SimpleExoPlayer simpleExoPlayer) {
        SimpleExoPlayer simpleExoPlayer2 = this.f9336q;
        if (simpleExoPlayer2 != simpleExoPlayer) {
            if (simpleExoPlayer2 != null) {
                simpleExoPlayer2.h(this.f9335p);
                f();
            }
            this.f9336q = simpleExoPlayer;
            this.f9332e.setVisibility(0);
            if (simpleExoPlayer != null) {
                h();
                simpleExoPlayer.L(this.f9335p);
            }
        }
    }

    public void setResizeMode(int i10) {
        if (this.f9334o.getResizeMode() != i10) {
            this.f9334o.setResizeMode(i10);
            post(this.f9341v);
        }
    }

    public void setUseTextureView(boolean z10) {
        if (z10 != this.f9339t) {
            this.f9339t = z10;
            k();
        }
    }

    public d(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public d(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f9339t = true;
        this.f9340u = false;
        this.f9341v = new a();
        this.f9337r = context;
        this.f9338s = new ViewGroup.LayoutParams(-1, -1);
        this.f9335p = new b();
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        layoutParams.gravity = 17;
        com.brentvatne.exoplayer.a aVar = new com.brentvatne.exoplayer.a(context);
        this.f9334o = aVar;
        aVar.setLayoutParams(layoutParams);
        View view = new View(getContext());
        this.f9332e = view;
        view.setLayoutParams(this.f9338s);
        view.setBackgroundColor(androidx.core.content.a.c(context, 17170444));
        SubtitleView subtitleView = new SubtitleView(context);
        this.f9333i = subtitleView;
        subtitleView.setLayoutParams(this.f9338s);
        subtitleView.d();
        subtitleView.e();
        k();
        aVar.addView(view, 1, this.f9338s);
        aVar.addView(subtitleView, 2, this.f9338s);
        addViewInLayout(aVar, 0, layoutParams);
    }
}
