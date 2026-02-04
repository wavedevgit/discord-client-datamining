package com.withpersona.sdk2.inquiry.selfie.view;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.util.AttributeSet;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.LinearInterpolator;
import android.widget.FrameLayout;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.selfie.view.SelfieOverlayView;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0086\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b@\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u000f\u0018\u0000 \u009a\u00012\u00020\u0001:\n\u009b\u0001F\u009c\u0001\u009d\u0001C\u009e\u0001B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J/\u0010\u000e\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\bH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ\u0015\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u0012\u0010\u0013J\u001f\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00142\b\b\u0002\u0010\u0016\u001a\u00020\u0010¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001b\u001a\u00020\r2\b\u0010\u001a\u001a\u0004\u0018\u00010\u0019¢\u0006\u0004\b\u001b\u0010\u001cJ\u0015\u0010\u001f\u001a\u00020\r2\u0006\u0010\u001e\u001a\u00020\u001d¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010#\u001a\u00020\r2\u0006\u0010\"\u001a\u00020!H\u0014¢\u0006\u0004\b#\u0010$J\u001f\u0010\t\u001a\u00020\r2\u0006\u0010%\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0014H\u0002¢\u0006\u0004\b\t\u0010&J\u000f\u0010'\u001a\u00020\rH\u0002¢\u0006\u0004\b'\u0010(JS\u00102\u001a\u00020\r*\u00020)2\u0006\u0010*\u001a\u00020\u001d2\u0006\u0010+\u001a\u00020\u001d2\u0006\u0010,\u001a\u00020\u001d2\u0006\u0010-\u001a\u00020\u001d2\u0006\u0010.\u001a\u00020\u001d2\u0006\u0010/\u001a\u00020\u001d2\u0006\u00100\u001a\u00020\b2\u0006\u00101\u001a\u00020\u001dH\u0002¢\u0006\u0004\b2\u00103J\u000f\u00104\u001a\u00020\rH\u0002¢\u0006\u0004\b4\u0010(J\u000f\u00106\u001a\u000205H\u0002¢\u0006\u0004\b6\u00107J\u000f\u00108\u001a\u000205H\u0002¢\u0006\u0004\b8\u00107J\u000f\u00109\u001a\u000205H\u0002¢\u0006\u0004\b9\u00107J+\u0010>\u001a\u00020\r*\u00020:2\u0006\u0010;\u001a\u00020:2\u0006\u0010<\u001a\u00020:2\u0006\u0010=\u001a\u00020\u001dH\u0002¢\u0006\u0004\b>\u0010?J\u001b\u0010@\u001a\u00020:*\u00020:2\u0006\u0010\u001e\u001a\u00020\u001dH\u0002¢\u0006\u0004\b@\u0010AJ\u000f\u0010B\u001a\u00020\rH\u0002¢\u0006\u0004\bB\u0010(R\u0016\u0010E\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bC\u0010DR\u0016\u0010H\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bF\u0010GR\u0014\u0010J\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\bI\u0010'R\u0014\u0010K\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\b4\u0010'R\u0014\u0010L\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\b@\u0010'R\u0014\u0010N\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bM\u0010'R\u0014\u0010O\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b>\u0010'R\u0014\u0010Q\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bP\u0010GR\u0014\u0010R\u001a\u00020\u001d8\u0002X\u0082D¢\u0006\u0006\n\u0004\b8\u0010GR\u0014\u0010S\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b6\u0010GR\u0014\u0010T\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010GR\u0014\u0010U\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\t\u0010GR\u0014\u0010X\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bV\u0010WR\u0014\u0010Z\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bY\u0010WR\u0014\u0010\\\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b[\u0010WR\u0014\u0010^\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b]\u0010WR\u0014\u0010`\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b_\u0010WR\u0014\u0010b\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\ba\u0010WR\u0014\u0010d\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bc\u0010WR\u0014\u0010e\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010WR\u0014\u0010g\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bG\u0010fR\u0014\u0010i\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bh\u0010fR\u0014\u0010j\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bB\u0010fR\u0014\u0010k\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010fR\u0014\u0010m\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bl\u0010fR\u0014\u0010o\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bn\u0010fR\u0014\u0010q\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bp\u0010fR\u0014\u0010s\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\br\u0010fR\u0016\u0010u\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bt\u0010GR\u0016\u0010w\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bv\u0010GR\u0014\u0010z\u001a\u00020:8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bx\u0010yR\u0018\u0010~\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b|\u0010}R\u001b\u0010\u0082\u0001\u001a\u0004\u0018\u00010\u007f8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0080\u0001\u0010\u0081\u0001R\u001a\u0010\u0084\u0001\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u0083\u0001\u0010}R\u001c\u0010\u0088\u0001\u001a\u0005\u0018\u00010\u0085\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0086\u0001\u0010\u0087\u0001R\u001a\u0010\u008a\u0001\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u0089\u0001\u0010}R\u0018\u0010\u001a\u001a\u00020\u00198\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008b\u0001\u0010\u008c\u0001R\u0019\u0010\u008f\u0001\u001a\u00020\u00108\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008d\u0001\u0010\u008e\u0001R\u001b\u0010\u0092\u0001\u001a\u00030\u0090\u0001*\u00020\u00148BX\u0082\u0004¢\u0006\u0007\u001a\u0005\bM\u0010\u0091\u0001R\u001a\u0010\u0094\u0001\u001a\u00020\u0010*\u00020:8BX\u0082\u0004¢\u0006\u0007\u001a\u0005\bP\u0010\u0093\u0001R-\u0010\u0099\u0001\u001a\u00020\b*\u0002052\u0007\u0010\u0095\u0001\u001a\u00020\b8B@BX\u0082\u000e¢\u0006\u000f\u001a\u0006\b\u0096\u0001\u0010\u0097\u0001\"\u0005\bc\u0010\u0098\u0001¨\u0006\u009f\u0001"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "w", "h", "oldw", "oldh", "", "onSizeChanged", "(IIII)V", "", "mirrored", "setIsPreviewMirrored", "(Z)V", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;", "newState", "animate", "E", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;Z)V", "Ltn/a;", "brightnessInfo", "setCameraStreamBrightnessInfo", "(Ltn/a;)V", "", "intensity", "setIntensity", "(F)V", "Landroid/graphics/Canvas;", "canvas", "onDraw", "(Landroid/graphics/Canvas;)V", "oldState", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;)V", "I", "()V", "Landroid/graphics/Path;", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "startAngle", "sweepAngle", "numTicks", "tickLength", "n", "(Landroid/graphics/Path;FFFFFFIF)V", "o", "Landroid/graphics/Paint;", "u", "()Landroid/graphics/Paint;", "t", "v", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", ViewProps.START, ViewProps.END, "percent", "r", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;F)V", "p", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;F)Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", "H", "d", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;", "state", "e", "F", "currentIntensity", "i", "colorOnSurface", ViewProps.SHADOW_COLOR, "accentColor", "q", "arcBaseColor", "arcHighlightColor", "s", "arcInset", "arcGapDegrees", "arcStrokeWidth", "arcDialStrokeWidth", "arcTickLength", "x", "Landroid/graphics/Path;", "arcTop", "y", "arcBottom", "z", "arcLeft", "A", "arcRight", "B", "arcDialLeft", "C", "arcDialRight", "D", "arcDialHighlightClipPathRight", "arcDialHighlightClipPathLeft", "Landroid/graphics/Paint;", "arcTopPaint", "G", "arcBottomPaint", "arcLeftPaint", "arcRightPaint", "J", "shadowPaint", "K", "arcDialLeftPaint", "L", "arcDialRightPaint", "M", "filledArcDialPaint", "N", "arcDialLeftIntensity", "O", "arcDialRightIntensity", "P", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", "arcHoverState", "Landroid/animation/ValueAnimator;", "Q", "Landroid/animation/ValueAnimator;", "stateAnimator", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$f;", "R", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$f;", "stateAnimationState", "S", "intensityAnimator", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$d;", "T", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$d;", "intensityAnimationState", "U", "directionHintAnimator", "V", "Ltn/a;", "W", "Z", "isPreviewMirrored", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$c;", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;)Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$c;", "endState", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;)Z", "isIdentity", "value", "getShadowAlpha", "(Landroid/graphics/Paint;)I", "(Landroid/graphics/Paint;I)V", "shadowAlpha", "a0", "b", "c", "f", "a", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSelfieOverlayView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView\n+ 2 Animator.kt\nandroidx/core/animation/AnimatorKt\n+ 3 Canvas.kt\nandroidx/core/graphics/CanvasKt\n*L\n1#1,891:1\n890#1:952\n890#1:960\n890#1:967\n890#1:975\n890#1:982\n890#1:990\n890#1:994\n890#1:995\n890#1:996\n890#1:997\n890#1:998\n890#1:999\n890#1:1000\n890#1:1001\n890#1:1002\n890#1:1003\n890#1:1004\n890#1:1005\n890#1:1006\n890#1:1007\n890#1:1008\n29#2:892\n85#2,18:893\n29#2:911\n85#2,18:912\n85#2,18:930\n44#3,4:948\n49#3,3:953\n44#3,4:956\n49#3,3:961\n27#3,3:964\n31#3,3:968\n44#3,4:971\n49#3,3:976\n27#3,3:979\n31#3,3:983\n44#3,4:986\n49#3,3:991\n*S KotlinDebug\n*F\n+ 1 SelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView\n*L\n552#1:952\n561#1:960\n589#1:967\n608#1:975\n626#1:982\n644#1:990\n678#1:994\n679#1:995\n680#1:996\n681#1:997\n682#1:998\n686#1:999\n787#1:1000\n788#1:1001\n790#1:1002\n791#1:1003\n793#1:1004\n794#1:1005\n796#1:1006\n797#1:1007\n799#1:1008\n222#1:892\n222#1:893,18\n298#1:911\n298#1:912,18\n394#1:930,18\n549#1:948,4\n549#1:953,3\n558#1:956,4\n558#1:961,3\n584#1:964,3\n584#1:968,3\n605#1:971,4\n605#1:976,3\n621#1:979,3\n621#1:983,3\n641#1:986,4\n641#1:991,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SelfieOverlayView extends FrameLayout {

    /* renamed from: a0  reason: collision with root package name */
    public static final b f19083a0 = new b(null);
    private final Path A;
    private final Path B;
    private final Path C;
    private final Path D;
    private final Path E;
    private final Paint F;
    private final Paint G;
    private final Paint H;
    private final Paint I;
    private final Paint J;
    private final Paint K;
    private final Paint L;
    private final Paint M;
    private float N;
    private float O;
    private final a P;
    private ValueAnimator Q;
    private f R;
    private ValueAnimator S;
    private d T;
    private ValueAnimator U;
    private tn.a V;
    private boolean W;

    /* renamed from: d  reason: collision with root package name */
    private e f19084d;

    /* renamed from: e  reason: collision with root package name */
    private float f19085e;

    /* renamed from: i  reason: collision with root package name */
    private final int f19086i;

    /* renamed from: o  reason: collision with root package name */
    private final int f19087o;

    /* renamed from: p  reason: collision with root package name */
    private final int f19088p;

    /* renamed from: q  reason: collision with root package name */
    private final int f19089q;

    /* renamed from: r  reason: collision with root package name */
    private final int f19090r;

    /* renamed from: s  reason: collision with root package name */
    private final float f19091s;

    /* renamed from: t  reason: collision with root package name */
    private final float f19092t;

    /* renamed from: u  reason: collision with root package name */
    private final float f19093u;

    /* renamed from: v  reason: collision with root package name */
    private final float f19094v;

    /* renamed from: w  reason: collision with root package name */
    private final float f19095w;

    /* renamed from: x  reason: collision with root package name */
    private final Path f19096x;

    /* renamed from: y  reason: collision with root package name */
    private final Path f19097y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f19098z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: r  reason: collision with root package name */
        public static final c f19108r = new c("Center", 0, 1.0f, 1.0f, 1.0f, 1.0f, 0.0f, 0.0f);

        /* renamed from: s  reason: collision with root package name */
        public static final c f19109s = new c("Left", 1, 0.1f, 0.1f, 0.0f, 0.1f, 1.0f, 0.0f);

        /* renamed from: t  reason: collision with root package name */
        public static final c f19110t = new c("Right", 2, 0.1f, 0.1f, 0.1f, 0.0f, 0.0f, 1.0f);

        /* renamed from: u  reason: collision with root package name */
        public static final c f19111u = new c("None", 3, 0.1f, 0.1f, 0.1f, 0.1f, 0.0f, 0.0f);

        /* renamed from: v  reason: collision with root package name */
        public static final c f19112v = new c("Finalizing", 4, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f);

        /* renamed from: w  reason: collision with root package name */
        private static final /* synthetic */ c[] f19113w;

        /* renamed from: x  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19114x;

        /* renamed from: d  reason: collision with root package name */
        private final float f19115d;

        /* renamed from: e  reason: collision with root package name */
        private final float f19116e;

        /* renamed from: i  reason: collision with root package name */
        private final float f19117i;

        /* renamed from: o  reason: collision with root package name */
        private final float f19118o;

        /* renamed from: p  reason: collision with root package name */
        private final float f19119p;

        /* renamed from: q  reason: collision with root package name */
        private final float f19120q;

        static {
            c[] a10 = a();
            f19113w = a10;
            f19114x = sr.a.a(a10);
        }

        private c(String str, int i10, float f10, float f11, float f12, float f13, float f14, float f15) {
            this.f19115d = f10;
            this.f19116e = f11;
            this.f19117i = f12;
            this.f19118o = f13;
            this.f19119p = f14;
            this.f19120q = f15;
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f19108r, f19109s, f19110t, f19111u, f19112v};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f19113w.clone();
        }

        public final float d() {
            return this.f19116e;
        }

        public final float e() {
            return this.f19119p;
        }

        public final float f() {
            return this.f19120q;
        }

        public final float g() {
            return this.f19117i;
        }

        public final float h() {
            return this.f19118o;
        }

        public final float i() {
            return this.f19115d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private float f19121a;

        /* renamed from: b  reason: collision with root package name */
        private float f19122b;

        /* renamed from: c  reason: collision with root package name */
        private float f19123c;

        public d(float f10, float f11, float f12) {
            this.f19121a = f10;
            this.f19122b = f11;
            this.f19123c = f12;
        }

        public final float a() {
            return this.f19123c;
        }

        public final float b() {
            return this.f19121a;
        }

        public final float c() {
            return this.f19122b;
        }

        public final void d(float f10) {
            this.f19121a = f10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof d) {
                d dVar = (d) obj;
                return Float.compare(this.f19121a, dVar.f19121a) == 0 && Float.compare(this.f19122b, dVar.f19122b) == 0 && Float.compare(this.f19123c, dVar.f19123c) == 0;
            }
            return false;
        }

        public int hashCode() {
            return (((Float.hashCode(this.f19121a) * 31) + Float.hashCode(this.f19122b)) * 31) + Float.hashCode(this.f19123c);
        }

        public String toString() {
            float f10 = this.f19121a;
            float f11 = this.f19122b;
            float f12 = this.f19123c;
            return "IntensityAnimationState(progress=" + f10 + ", startIntensity=" + f11 + ", endIntensity=" + f12 + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        public static final e f19124d = new e("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final e f19125e = new e("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final e f19126i = new e("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final e f19127o = new e("None", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final e f19128p = new e("Finalizing", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ e[] f19129q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19130r;

        static {
            e[] a10 = a();
            f19129q = a10;
            f19130r = sr.a.a(a10);
        }

        private e(String str, int i10) {
        }

        private static final /* synthetic */ e[] a() {
            return new e[]{f19124d, f19125e, f19126i, f19127o, f19128p};
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f19129q.clone();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f19131a;

        /* renamed from: b  reason: collision with root package name */
        private final e f19132b;

        /* renamed from: c  reason: collision with root package name */
        private final e f19133c;

        /* renamed from: d  reason: collision with root package name */
        private float f19134d;

        /* renamed from: e  reason: collision with root package name */
        private final float f19135e;

        /* renamed from: f  reason: collision with root package name */
        private final float f19136f;

        /* renamed from: g  reason: collision with root package name */
        private final float f19137g;

        /* renamed from: h  reason: collision with root package name */
        private final float f19138h;

        /* renamed from: i  reason: collision with root package name */
        private final float f19139i;

        /* renamed from: j  reason: collision with root package name */
        private final float f19140j;

        public f(boolean z10, e startState, e endState, float f10, float f11, float f12, float f13, float f14, float f15, float f16) {
            Intrinsics.checkNotNullParameter(startState, "startState");
            Intrinsics.checkNotNullParameter(endState, "endState");
            this.f19131a = z10;
            this.f19132b = startState;
            this.f19133c = endState;
            this.f19134d = f10;
            this.f19135e = f11;
            this.f19136f = f12;
            this.f19137g = f13;
            this.f19138h = f14;
            this.f19139i = f15;
            this.f19140j = f16;
        }

        public final boolean a() {
            return this.f19131a;
        }

        public final e b() {
            return this.f19133c;
        }

        public final float c() {
            return this.f19134d;
        }

        public final float d() {
            return this.f19136f;
        }

        public final float e() {
            return this.f19139i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof f) {
                f fVar = (f) obj;
                return this.f19131a == fVar.f19131a && this.f19132b == fVar.f19132b && this.f19133c == fVar.f19133c && Float.compare(this.f19134d, fVar.f19134d) == 0 && Float.compare(this.f19135e, fVar.f19135e) == 0 && Float.compare(this.f19136f, fVar.f19136f) == 0 && Float.compare(this.f19137g, fVar.f19137g) == 0 && Float.compare(this.f19138h, fVar.f19138h) == 0 && Float.compare(this.f19139i, fVar.f19139i) == 0 && Float.compare(this.f19140j, fVar.f19140j) == 0;
            }
            return false;
        }

        public final float f() {
            return this.f19140j;
        }

        public final float g() {
            return this.f19137g;
        }

        public final float h() {
            return this.f19138h;
        }

        public int hashCode() {
            return (((((((((((((((((Boolean.hashCode(this.f19131a) * 31) + this.f19132b.hashCode()) * 31) + this.f19133c.hashCode()) * 31) + Float.hashCode(this.f19134d)) * 31) + Float.hashCode(this.f19135e)) * 31) + Float.hashCode(this.f19136f)) * 31) + Float.hashCode(this.f19137g)) * 31) + Float.hashCode(this.f19138h)) * 31) + Float.hashCode(this.f19139i)) * 31) + Float.hashCode(this.f19140j);
        }

        public final float i() {
            return this.f19135e;
        }

        public final void j(float f10) {
            this.f19134d = f10;
        }

        public String toString() {
            boolean z10 = this.f19131a;
            e eVar = this.f19132b;
            e eVar2 = this.f19133c;
            float f10 = this.f19134d;
            float f11 = this.f19135e;
            float f12 = this.f19136f;
            float f13 = this.f19137g;
            float f14 = this.f19138h;
            float f15 = this.f19139i;
            float f16 = this.f19140j;
            return "StateAnimationState(animating=" + z10 + ", startState=" + eVar + ", endState=" + eVar2 + ", progress=" + f10 + ", startArcTopAlpha=" + f11 + ", startArcBottomAlpha=" + f12 + ", startArcLeftAlpha=" + f13 + ", startArcRightAlpha=" + f14 + ", startArcDialLeftAlpha=" + f15 + ", startArcDialRightAlpha=" + f16 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19141a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f19124d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f19125e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f19126i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f19127o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f19128p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f19141a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f19142a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f19143b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ SelfieOverlayView f19144c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f19145d;

        public h(Ref.BooleanRef booleanRef, e eVar, SelfieOverlayView selfieOverlayView, Ref.BooleanRef booleanRef2) {
            this.f19142a = booleanRef;
            this.f19143b = eVar;
            this.f19144c = selfieOverlayView;
            this.f19145d = booleanRef2;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f19145d.element = true;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            if (!this.f19142a.element) {
                SelfieOverlayView.y(this.f19143b, this.f19144c);
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements Animator.AnimatorListener {
        public i() {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            SelfieOverlayView.this.T = null;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements Animator.AnimatorListener {
        public j() {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            f fVar = SelfieOverlayView.this.R;
            if (fVar != null) {
                e eVar = SelfieOverlayView.this.f19084d;
                SelfieOverlayView.this.f19084d = fVar.b();
                SelfieOverlayView.this.w(eVar, fVar.b());
            }
            SelfieOverlayView.this.R = null;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SelfieOverlayView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f19084d = e.f19124d;
        this.f19086i = -1;
        this.f19087o = -16777216;
        this.f19088p = -13910906;
        this.f19089q = -1;
        this.f19090r = -13910906;
        this.f19091s = (float) mp.h.a(48.0d);
        this.f19092t = 20.0f;
        this.f19093u = (float) mp.h.a(4.0d);
        this.f19094v = (float) mp.h.a(2.0d);
        this.f19095w = (float) mp.h.a(24.0d);
        this.f19096x = new Path();
        this.f19097y = new Path();
        this.f19098z = new Path();
        this.A = new Path();
        this.B = new Path();
        this.C = new Path();
        this.D = new Path();
        this.E = new Path();
        this.F = u();
        this.G = u();
        this.H = u();
        this.I = u();
        this.J = v();
        Paint t10 = t();
        t10.setAlpha(0);
        this.K = t10;
        Paint t11 = t();
        t11.setAlpha(0);
        this.L = t11;
        Paint t12 = t();
        t12.setColor(-13910906);
        this.M = t12;
        this.P = p(new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null), this.f19085e);
        this.V = new tn.a(null, 1, null);
        setWillNotDraw(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void B(SelfieOverlayView selfieOverlayView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        d dVar = selfieOverlayView.T;
        if (dVar != null) {
            dVar.d(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void C(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        d dVar = selfieOverlayView.T;
        if (dVar != null) {
            dVar.d(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    private final void D(Paint paint, int i10) {
        if (paint.getAlpha() == i10) {
            return;
        }
        paint.setShadowLayer(this.f19093u * 2, 0.0f, 0.0f, r1.c.l(this.f19087o, i10));
        paint.setAlpha(i10);
    }

    public static /* synthetic */ void F(SelfieOverlayView selfieOverlayView, e eVar, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        selfieOverlayView.E(eVar, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(SelfieOverlayView selfieOverlayView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        f fVar = selfieOverlayView.R;
        if (fVar != null) {
            fVar.j(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    private final void H() {
        float measuredWidth = getMeasuredWidth();
        float measuredHeight = getMeasuredHeight();
        float f10 = measuredWidth / 2.0f;
        float f11 = measuredHeight / 2.0f;
        Path path = this.E;
        float f12 = this.N * 45.0f;
        path.reset();
        path.moveTo(f10, f11);
        path.arcTo(0.0f, 0.0f, measuredWidth, measuredHeight, 180.0f - f12, f12 * 2.0f, false);
        path.close();
        Path path2 = this.D;
        float f13 = this.O * 45.0f;
        path2.reset();
        path2.moveTo(f10, f11);
        path2.arcTo(0.0f, 0.0f, measuredWidth, measuredHeight, -f13, f13 * 2.0f, false);
        path2.close();
    }

    private final void I() {
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        float f10 = this.f19092t / 2.0f;
        this.f19096x.reset();
        Path path = this.f19096x;
        float f11 = this.f19091s;
        float f12 = measuredWidth;
        float f13 = measuredHeight;
        path.addArc(f11, f11, f12 - f11, f13 - f11, f10 + 225.0f, 90.0f - this.f19092t);
        this.f19097y.reset();
        Path path2 = this.f19097y;
        float f14 = this.f19091s;
        path2.addArc(f14, f14, f12 - f14, f13 - f14, f10 + 45.0f, 90.0f - this.f19092t);
        this.f19098z.reset();
        Path path3 = this.f19098z;
        float f15 = this.f19091s;
        float f16 = f10 + 135.0f;
        path3.addArc(f15, f15, f12 - f15, f13 - f15, f16, 90.0f - this.f19092t);
        this.A.reset();
        Path path4 = this.A;
        float f17 = this.f19091s;
        float f18 = f10 + 315.0f;
        path4.addArc(f17, f17, f12 - f17, f13 - f17, f18, 90.0f - this.f19092t);
        this.B.reset();
        Path path5 = this.B;
        float f19 = this.f19091s;
        n(path5, f19, f19, f12 - f19, f13 - f19, f16, 90.0f - this.f19092t, 30, this.f19095w);
        this.C.reset();
        Path path6 = this.C;
        float f20 = this.f19091s;
        n(path6, f20, f20, f12 - f20, f13 - f20, f18, 90.0f - this.f19092t, 30, this.f19095w);
        invalidate();
    }

    private final void n(Path path, float f10, float f11, float f12, float f13, float f14, float f15, int i10, float f16) {
        int i11 = i10;
        float f17 = (f12 - f10) / 2.0f;
        float f18 = f17 + f10;
        float f19 = f17 + f11;
        float f20 = f16 / 2;
        double radians = Math.toRadians(f14);
        double radians2 = Math.toRadians(f15) / (i11 - 1);
        int i12 = 0;
        while (i12 < i11) {
            double cos = Math.cos(radians);
            double sin = Math.sin(radians);
            double d10 = f17 - f20;
            float f21 = f18;
            float f22 = f19;
            float f23 = f20;
            double d11 = f17 + f20;
            path.moveTo(((float) (d10 * cos)) + f21, ((float) (d10 * sin)) + f22);
            path.lineTo(((float) (cos * d11)) + f21, ((float) (d11 * sin)) + f22);
            radians += radians2;
            i12++;
            f20 = f23;
            f17 = f17;
            f18 = f21;
            i11 = i10;
            f19 = f22;
        }
    }

    private final void o() {
        float i10;
        float d10;
        float g10;
        float h10;
        float e10;
        float f10;
        float f11;
        float f12;
        f fVar = this.R;
        d dVar = this.T;
        if (fVar != null) {
            float c10 = fVar.c();
            c q10 = q(fVar.b());
            float i11 = fVar.i();
            i10 = ((q10.i() - i11) * c10) + i11;
            float d11 = fVar.d();
            d10 = ((q10.d() - d11) * c10) + d11;
            float g11 = fVar.g();
            g10 = ((q10.g() - g11) * c10) + g11;
            float h11 = fVar.h();
            h10 = ((q10.h() - h11) * c10) + h11;
            float e11 = fVar.e();
            e10 = ((q10.e() - e11) * c10) + e11;
            float f13 = fVar.f();
            f10 = ((q10.f() - f13) * c10) + f13;
        } else {
            i10 = q(this.f19084d).i();
            d10 = q(this.f19084d).d();
            g10 = q(this.f19084d).g();
            h10 = q(this.f19084d).h();
            e10 = q(this.f19084d).e();
            f10 = q(this.f19084d).f();
        }
        if (dVar != null) {
            f12 = ((dVar.a() - dVar.c()) * dVar.b()) + dVar.c();
            this.f19085e = f12;
            f11 = (i10 - 0.1f) / 1.0f;
        } else {
            f11 = (i10 - 0.1f) / 1.0f;
            f12 = this.f19085e;
        }
        float f14 = ((d10 - 0.1f) / 1.0f) * f12;
        float f15 = ((g10 - 0.1f) / 1.0f) * f12;
        float f16 = ((h10 - 0.1f) / 1.0f) * f12;
        float f17 = ((e10 - 0.1f) / 1.0f) * f12;
        float f18 = ((f10 - 0.1f) / 1.0f) * f12;
        this.F.setColor(r1.c.c(this.f19089q, this.f19090r, f11 * f12));
        this.G.setColor(r1.c.c(this.f19089q, this.f19090r, f14));
        this.H.setColor(r1.c.c(this.f19089q, this.f19090r, f15));
        this.I.setColor(r1.c.c(this.f19089q, this.f19090r, f16));
        boolean z10 = (this.N == f17 && this.O == f18) ? false : true;
        this.N = f17;
        this.O = f18;
        Paint paint = this.F;
        float f19 = (float) SetSpanOperation.SPAN_MAX_PRIORITY;
        paint.setAlpha((int) (i10 * f19));
        this.G.setAlpha((int) (d10 * f19));
        this.H.setAlpha((int) (g10 * f19));
        this.I.setAlpha((int) (h10 * f19));
        this.K.setAlpha((int) (e10 * f19));
        this.L.setAlpha((int) (f10 * f19));
        this.F.setStrokeWidth(this.f19093u * this.P.i());
        this.G.setStrokeWidth(this.f19093u * this.P.i());
        this.H.setStrokeWidth(this.f19093u * this.P.i());
        this.I.setStrokeWidth(this.f19093u * this.P.i());
        if (z10) {
            H();
        }
        invalidate();
    }

    private final a p(a aVar, float f10) {
        float c10 = (float) mp.h.c(48.0d);
        aVar.s(0.0f);
        float f11 = c10 * f10;
        aVar.t(f11);
        aVar.l(0.0f);
        float f12 = (-c10) * f10;
        aVar.m(f12);
        aVar.n(f11);
        aVar.o(0.0f);
        aVar.p(f12);
        aVar.q(0.0f);
        aVar.r(f10 + 1.0f);
        return aVar;
    }

    private final c q(e eVar) {
        int i10 = g.f19141a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return c.f19112v;
                        }
                        throw new p();
                    }
                    return c.f19111u;
                }
                return c.f19110t;
            }
            return c.f19109s;
        }
        return c.f19108r;
    }

    private final void r(a aVar, a aVar2, a aVar3, float f10) {
        float j10 = aVar2.j();
        aVar.s(((aVar3.j() - j10) * f10) + j10);
        float k10 = aVar2.k();
        aVar.t(((aVar3.k() - k10) * f10) + k10);
        float c10 = aVar2.c();
        aVar.l(((aVar3.c() - c10) * f10) + c10);
        float d10 = aVar2.d();
        aVar.m(((aVar3.d() - d10) * f10) + d10);
        float e10 = aVar2.e();
        aVar.n(((aVar3.e() - e10) * f10) + e10);
        float f11 = aVar2.f();
        aVar.o(((aVar3.f() - f11) * f10) + f11);
        float g10 = aVar2.g();
        aVar.p(((aVar3.g() - g10) * f10) + g10);
        float h10 = aVar2.h();
        aVar.q(((aVar3.h() - h10) * f10) + h10);
        float i10 = aVar2.i();
        aVar.r(((aVar3.i() - i10) * f10) + i10);
    }

    private final boolean s(a aVar) {
        if (aVar.j() == 0.0f && aVar.k() == 0.0f && aVar.c() == 0.0f && aVar.d() == 0.0f && aVar.e() == 0.0f && aVar.f() == 0.0f && aVar.g() == 0.0f && aVar.h() == 0.0f && aVar.i() == 1.0f) {
            return true;
        }
        return false;
    }

    private final Paint t() {
        Paint u10 = u();
        u10.setStrokeWidth(this.f19094v);
        return u10;
    }

    private final Paint u() {
        Paint paint = new Paint();
        paint.setAntiAlias(true);
        paint.setColor(this.f19086i);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(this.f19093u);
        paint.setStrokeCap(Paint.Cap.ROUND);
        return paint;
    }

    private final Paint v() {
        Paint u10 = u();
        u10.setStrokeWidth(this.f19093u);
        u10.setColor(this.f19087o);
        u10.setShadowLayer(this.f19093u * 2, 0.0f, 0.0f, this.f19087o);
        return u10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w(e eVar, e eVar2) {
        if (eVar == eVar2) {
            return;
        }
        ValueAnimator valueAnimator = this.U;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        if (s(this.P)) {
            y(eVar2, this);
            return;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setStartDelay(0L);
        ofFloat.setRepeatCount(0);
        ofFloat.setDuration(250L);
        final a b10 = a.b(this.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
        final a aVar = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                SelfieOverlayView.x(SelfieOverlayView.this, b10, aVar, valueAnimator2);
            }
        });
        Intrinsics.checkNotNull(ofFloat);
        ofFloat.addListener(new h(booleanRef, eVar2, this, booleanRef));
        ofFloat.start();
        this.U = ofFloat;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y(e eVar, final SelfieOverlayView selfieOverlayView) {
        int i10 = g.f19141a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4 && i10 != 5) {
                        throw new p();
                    }
                    return;
                }
                ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
                ofFloat.setInterpolator(new AccelerateDecelerateInterpolator());
                ofFloat.setRepeatMode(2);
                ofFloat.setStartDelay(0L);
                ofFloat.setRepeatCount(-1);
                ofFloat.setDuration(700L);
                final a b10 = a.b(selfieOverlayView.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
                final a aVar = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
                aVar.p((float) mp.h.c(48.0d));
                ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.d
                    @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                    public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                        SelfieOverlayView.A(SelfieOverlayView.this, b10, aVar, valueAnimator);
                    }
                });
                ofFloat.start();
                selfieOverlayView.U = ofFloat;
                return;
            }
            ValueAnimator ofFloat2 = ValueAnimator.ofFloat(0.0f, 1.0f);
            ofFloat2.setInterpolator(new AccelerateDecelerateInterpolator());
            ofFloat2.setRepeatMode(2);
            ofFloat2.setStartDelay(0L);
            ofFloat2.setRepeatCount(-1);
            ofFloat2.setDuration(700L);
            final a b11 = a.b(selfieOverlayView.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            final a aVar2 = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            aVar2.n(-((float) mp.h.c(48.0d)));
            ofFloat2.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.c
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    SelfieOverlayView.z(SelfieOverlayView.this, b11, aVar2, valueAnimator);
                }
            });
            ofFloat2.start();
            selfieOverlayView.U = ofFloat2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.o();
    }

    public final void E(e newState, boolean z10) {
        e eVar;
        Intrinsics.checkNotNullParameter(newState, "newState");
        f fVar = this.R;
        if (fVar != null && fVar.a()) {
            f fVar2 = this.R;
            if (fVar2 != null) {
                eVar = fVar2.b();
            } else {
                eVar = null;
            }
            if (eVar == newState) {
                return;
            }
        }
        f fVar3 = this.R;
        if ((fVar3 == null || !fVar3.a()) && this.f19084d == newState) {
            return;
        }
        ValueAnimator valueAnimator = this.Q;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        if (z10) {
            this.R = new f(true, this.f19084d, newState, 0.0f, this.F.getAlpha() / 255.0f, this.G.getAlpha() / 255.0f, this.H.getAlpha() / 255.0f, this.I.getAlpha() / 255.0f, this.K.getAlpha() / 255.0f, this.L.getAlpha() / 255.0f);
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
            ofFloat.setInterpolator(new LinearInterpolator());
            ofFloat.setStartDelay(0L);
            ofFloat.setRepeatCount(0);
            ofFloat.setDuration(400L);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: lp.q
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.G(SelfieOverlayView.this, valueAnimator2);
                }
            });
            Intrinsics.checkNotNull(ofFloat);
            ofFloat.addListener(new j());
            ofFloat.start();
            this.Q = ofFloat;
            return;
        }
        e eVar2 = this.f19084d;
        this.f19084d = newState;
        this.R = null;
        o();
        w(eVar2, newState);
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        float b10;
        float c10;
        int save;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        float j10 = this.P.j();
        float k10 = this.P.k();
        int save2 = canvas.save();
        canvas.translate(j10, k10);
        try {
            if (this.V.d() > 0.5f) {
                D(this.J, (int) (this.F.getAlpha() * (((this.V.d() - 0.5f) * 0.66f) + 0.0f)));
                canvas.drawPath(this.f19096x, this.J);
            }
            canvas.drawPath(this.f19096x, this.F);
            canvas.restoreToCount(save2);
            float c11 = this.P.c();
            float d10 = this.P.d();
            int save3 = canvas.save();
            canvas.translate(c11, d10);
            try {
                if (this.V.a() > 0.5f) {
                    D(this.J, (int) (this.G.getAlpha() * (((this.V.a() - 0.5f) * 0.66f) + 0.0f)));
                    canvas.drawPath(this.f19097y, this.J);
                }
                canvas.drawPath(this.f19097y, this.G);
                canvas.restoreToCount(save3);
                if (this.W) {
                    b10 = this.V.c();
                } else {
                    b10 = this.V.b();
                }
                if (this.W) {
                    c10 = this.V.b();
                } else {
                    c10 = this.V.c();
                }
                if (this.K.getAlpha() > 0) {
                    save = canvas.save();
                    try {
                        canvas.translate(this.P.e(), this.P.f());
                        if (b10 > 0.5f) {
                            D(this.J, (int) (this.K.getAlpha() * (((b10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.B, this.J);
                        }
                        canvas.drawPath(this.B, this.K);
                        canvas.clipPath(this.E);
                        canvas.drawPath(this.B, this.M);
                        canvas.restoreToCount(save);
                    } finally {
                    }
                }
                if (this.H.getAlpha() > 0) {
                    float e10 = this.P.e();
                    float f10 = this.P.f();
                    save2 = canvas.save();
                    canvas.translate(e10, f10);
                    if (b10 > 0.5f) {
                        try {
                            D(this.J, (int) (this.H.getAlpha() * (((b10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.f19098z, this.J);
                        } finally {
                        }
                    }
                    canvas.drawPath(this.f19098z, this.H);
                    canvas.restoreToCount(save2);
                }
                if (this.L.getAlpha() > 0) {
                    int save4 = canvas.save();
                    try {
                        canvas.translate(this.P.g(), this.P.h());
                        if (c10 > 0.5f) {
                            D(this.J, (int) (this.L.getAlpha() * (((c10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.C, this.J);
                        }
                        canvas.drawPath(this.C, this.L);
                        canvas.clipPath(this.D);
                        canvas.drawPath(this.C, this.M);
                        canvas.restoreToCount(save4);
                    } finally {
                        canvas.restoreToCount(save4);
                    }
                }
                if (this.I.getAlpha() > 0) {
                    float g10 = this.P.g();
                    float h10 = this.P.h();
                    save = canvas.save();
                    canvas.translate(g10, h10);
                    if (c10 > 0.5f) {
                        try {
                            D(this.J, (int) (this.I.getAlpha() * ((0.66f * (c10 - 0.5f)) + 0.0f)));
                            canvas.drawPath(this.A, this.J);
                        } finally {
                            canvas.restoreToCount(save);
                        }
                    }
                    canvas.drawPath(this.A, this.I);
                    canvas.restoreToCount(save);
                }
            } finally {
                canvas.restoreToCount(save3);
            }
        } finally {
            canvas.restoreToCount(save2);
        }
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        I();
    }

    public final void setCameraStreamBrightnessInfo(tn.a aVar) {
        if (aVar == null) {
            aVar = new tn.a(null, 1, null);
        }
        this.V = aVar;
        invalidate();
    }

    public final void setIntensity(float f10) {
        if (this.f19085e == f10) {
            return;
        }
        float l10 = kotlin.ranges.d.l(f10, 0.0f, 1.0f);
        ValueAnimator valueAnimator = this.S;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        this.T = new d(0.0f, this.f19085e, l10);
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setStartDelay(0L);
        ofFloat.setRepeatCount(0);
        ofFloat.setDuration(200L);
        if (this.f19084d == e.f19124d) {
            final a b10 = a.b(this.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            final a p10 = p(new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null), l10);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.C(SelfieOverlayView.this, b10, p10, valueAnimator2);
                }
            });
        } else {
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: lp.p
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.B(SelfieOverlayView.this, valueAnimator2);
                }
            });
        }
        Intrinsics.checkNotNull(ofFloat);
        ofFloat.addListener(new i());
        ofFloat.start();
        this.S = ofFloat;
    }

    public final void setIsPreviewMirrored(boolean z10) {
        if (this.W == z10) {
            return;
        }
        this.W = z10;
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private float f19099a;

        /* renamed from: b  reason: collision with root package name */
        private float f19100b;

        /* renamed from: c  reason: collision with root package name */
        private float f19101c;

        /* renamed from: d  reason: collision with root package name */
        private float f19102d;

        /* renamed from: e  reason: collision with root package name */
        private float f19103e;

        /* renamed from: f  reason: collision with root package name */
        private float f19104f;

        /* renamed from: g  reason: collision with root package name */
        private float f19105g;

        /* renamed from: h  reason: collision with root package name */
        private float f19106h;

        /* renamed from: i  reason: collision with root package name */
        private float f19107i;

        public a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18) {
            this.f19099a = f10;
            this.f19100b = f11;
            this.f19101c = f12;
            this.f19102d = f13;
            this.f19103e = f14;
            this.f19104f = f15;
            this.f19105g = f16;
            this.f19106h = f17;
            this.f19107i = f18;
        }

        public static /* synthetic */ a b(a aVar, float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                f10 = aVar.f19099a;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f19100b;
            }
            if ((i10 & 4) != 0) {
                f12 = aVar.f19101c;
            }
            if ((i10 & 8) != 0) {
                f13 = aVar.f19102d;
            }
            if ((i10 & 16) != 0) {
                f14 = aVar.f19103e;
            }
            if ((i10 & 32) != 0) {
                f15 = aVar.f19104f;
            }
            if ((i10 & 64) != 0) {
                f16 = aVar.f19105g;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                f17 = aVar.f19106h;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                f18 = aVar.f19107i;
            }
            float f19 = f17;
            float f20 = f18;
            float f21 = f15;
            float f22 = f16;
            float f23 = f14;
            float f24 = f12;
            return aVar.a(f10, f11, f24, f13, f23, f21, f22, f19, f20);
        }

        public final a a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18) {
            return new a(f10, f11, f12, f13, f14, f15, f16, f17, f18);
        }

        public final float c() {
            return this.f19101c;
        }

        public final float d() {
            return this.f19102d;
        }

        public final float e() {
            return this.f19103e;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) obj;
                return Float.compare(this.f19099a, aVar.f19099a) == 0 && Float.compare(this.f19100b, aVar.f19100b) == 0 && Float.compare(this.f19101c, aVar.f19101c) == 0 && Float.compare(this.f19102d, aVar.f19102d) == 0 && Float.compare(this.f19103e, aVar.f19103e) == 0 && Float.compare(this.f19104f, aVar.f19104f) == 0 && Float.compare(this.f19105g, aVar.f19105g) == 0 && Float.compare(this.f19106h, aVar.f19106h) == 0 && Float.compare(this.f19107i, aVar.f19107i) == 0;
            }
            return false;
        }

        public final float f() {
            return this.f19104f;
        }

        public final float g() {
            return this.f19105g;
        }

        public final float h() {
            return this.f19106h;
        }

        public int hashCode() {
            return (((((((((((((((Float.hashCode(this.f19099a) * 31) + Float.hashCode(this.f19100b)) * 31) + Float.hashCode(this.f19101c)) * 31) + Float.hashCode(this.f19102d)) * 31) + Float.hashCode(this.f19103e)) * 31) + Float.hashCode(this.f19104f)) * 31) + Float.hashCode(this.f19105g)) * 31) + Float.hashCode(this.f19106h)) * 31) + Float.hashCode(this.f19107i);
        }

        public final float i() {
            return this.f19107i;
        }

        public final float j() {
            return this.f19099a;
        }

        public final float k() {
            return this.f19100b;
        }

        public final void l(float f10) {
            this.f19101c = f10;
        }

        public final void m(float f10) {
            this.f19102d = f10;
        }

        public final void n(float f10) {
            this.f19103e = f10;
        }

        public final void o(float f10) {
            this.f19104f = f10;
        }

        public final void p(float f10) {
            this.f19105g = f10;
        }

        public final void q(float f10) {
            this.f19106h = f10;
        }

        public final void r(float f10) {
            this.f19107i = f10;
        }

        public final void s(float f10) {
            this.f19099a = f10;
        }

        public final void t(float f10) {
            this.f19100b = f10;
        }

        public String toString() {
            float f10 = this.f19099a;
            float f11 = this.f19100b;
            float f12 = this.f19101c;
            float f13 = this.f19102d;
            float f14 = this.f19103e;
            float f15 = this.f19104f;
            float f16 = this.f19105g;
            float f17 = this.f19106h;
            float f18 = this.f19107i;
            return "ArcHoverState(arcTopTranslateX=" + f10 + ", arcTopTranslateY=" + f11 + ", arcBottomTranslateX=" + f12 + ", arcBottomTranslateY=" + f13 + ", arcLeftTranslateX=" + f14 + ", arcLeftTranslateY=" + f15 + ", arcRightTranslateX=" + f16 + ", arcRightTranslateY=" + f17 + ", arcThicknessMultiplier=" + f18 + ")";
        }

        public /* synthetic */ a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? 0.0f : f10, (i10 & 2) != 0 ? 0.0f : f11, (i10 & 4) != 0 ? 0.0f : f12, (i10 & 8) != 0 ? 0.0f : f13, (i10 & 16) != 0 ? 0.0f : f14, (i10 & 32) != 0 ? 0.0f : f15, (i10 & 64) != 0 ? 0.0f : f16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? 0.0f : f17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 1.0f : f18);
        }
    }
}
