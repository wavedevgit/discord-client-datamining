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
    private View f8212d;

    /* renamed from: e  reason: collision with root package name */
    private final View f8213e;

    /* renamed from: i  reason: collision with root package name */
    private final SubtitleView f8214i;

    /* renamed from: o  reason: collision with root package name */
    private final com.brentvatne.exoplayer.a f8215o;

    /* renamed from: p  reason: collision with root package name */
    private final b f8216p;

    /* renamed from: q  reason: collision with root package name */
    private SimpleExoPlayer f8217q;

    /* renamed from: r  reason: collision with root package name */
    private Context f8218r;

    /* renamed from: s  reason: collision with root package name */
    private ViewGroup.LayoutParams f8219s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f8220t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f8221u;

    /* renamed from: v  reason: collision with root package name */
    private final Runnable f8222v;

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
            d.this.f8214i.setCues(cueGroup.f12938d);
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
            d.this.f8213e.setVisibility(4);
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
            if (videoSize.f13462d != 0 || videoSize.f13463e != 0) {
                if (d.this.f8215o.getAspectRatio() == 0.0f) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                com.brentvatne.exoplayer.a aVar = d.this.f8215o;
                int i10 = videoSize.f13463e;
                if (i10 == 0) {
                    f10 = 1.0f;
                } else {
                    f10 = (videoSize.f13462d * videoSize.f13465o) / i10;
                }
                aVar.setAspectRatio(f10);
                if (z10) {
                    d dVar = d.this;
                    dVar.post(dVar.f8222v);
                }
            }
        }

        private b() {
        }

        @Override // com.google.android.exoplayer2.Player.b, zd.m
        public void onCues(List list) {
            d.this.f8214i.setCues(list);
        }

        @Override // com.google.android.exoplayer2.Player.b
        public void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        }
    }

    public d(Context context) {
        this(context, null);
    }

    private void f() {
        View view = this.f8212d;
        if (view instanceof TextureView) {
            this.f8217q.F((TextureView) view);
        } else if (view instanceof SurfaceView) {
            this.f8217q.S((SurfaceView) view);
        }
    }

    private void h() {
        View view = this.f8212d;
        if (view instanceof TextureView) {
            this.f8217q.y((TextureView) view);
        } else if (view instanceof SurfaceView) {
            this.f8217q.j((SurfaceView) view);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i() {
        SimpleExoPlayer simpleExoPlayer = this.f8217q;
        if (simpleExoPlayer != null) {
            je.m t02 = simpleExoPlayer.t0();
            for (int i10 = 0; i10 < t02.f29855a; i10++) {
                if (this.f8217q.w0(i10) == 2 && t02.a(i10) != null) {
                    return;
                }
            }
            this.f8213e.setVisibility(0);
        }
    }

    private void j() {
        int i10;
        View view = this.f8213e;
        if (this.f8221u) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        view.setVisibility(i10);
    }

    private void k() {
        View surfaceView;
        if (this.f8220t) {
            surfaceView = new TextureView(this.f8218r);
        } else {
            surfaceView = new SurfaceView(this.f8218r);
        }
        surfaceView.setLayoutParams(this.f8219s);
        this.f8212d = surfaceView;
        if (this.f8215o.getChildAt(0) != null) {
            this.f8215o.removeViewAt(0);
        }
        this.f8215o.addView(this.f8212d, 0, this.f8219s);
        if (this.f8217q != null) {
            h();
        }
    }

    public void g() {
        this.f8215o.a();
    }

    public View getVideoSurfaceView() {
        return this.f8212d;
    }

    public void setHideShutterView(boolean z10) {
        this.f8221u = z10;
        j();
    }

    public void setPlayer(SimpleExoPlayer simpleExoPlayer) {
        SimpleExoPlayer simpleExoPlayer2 = this.f8217q;
        if (simpleExoPlayer2 != simpleExoPlayer) {
            if (simpleExoPlayer2 != null) {
                simpleExoPlayer2.h(this.f8216p);
                f();
            }
            this.f8217q = simpleExoPlayer;
            this.f8213e.setVisibility(0);
            if (simpleExoPlayer != null) {
                h();
                simpleExoPlayer.L(this.f8216p);
            }
        }
    }

    public void setResizeMode(int i10) {
        if (this.f8215o.getResizeMode() != i10) {
            this.f8215o.setResizeMode(i10);
            post(this.f8222v);
        }
    }

    public void setUseTextureView(boolean z10) {
        if (z10 != this.f8220t) {
            this.f8220t = z10;
            k();
        }
    }

    public d(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public d(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f8220t = true;
        this.f8221u = false;
        this.f8222v = new a();
        this.f8218r = context;
        this.f8219s = new ViewGroup.LayoutParams(-1, -1);
        this.f8216p = new b();
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, -1);
        layoutParams.gravity = 17;
        com.brentvatne.exoplayer.a aVar = new com.brentvatne.exoplayer.a(context);
        this.f8215o = aVar;
        aVar.setLayoutParams(layoutParams);
        View view = new View(getContext());
        this.f8213e = view;
        view.setLayoutParams(this.f8219s);
        view.setBackgroundColor(androidx.core.content.a.c(context, 17170444));
        SubtitleView subtitleView = new SubtitleView(context);
        this.f8214i = subtitleView;
        subtitleView.setLayoutParams(this.f8219s);
        subtitleView.d();
        subtitleView.e();
        k();
        aVar.addView(view, 1, this.f8219s);
        aVar.addView(subtitleView, 2, this.f8219s);
        addViewInLayout(aVar, 0, layoutParams);
    }
}
