package com.rivereactnative;

import android.content.res.Resources;
import android.graphics.Color;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.FrameLayout;
import app.rive.runtime.kotlin.RiveAnimationView;
import app.rive.runtime.kotlin.controllers.RiveFileController;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Artboard;
import app.rive.runtime.kotlin.core.AudioAsset;
import app.rive.runtime.kotlin.core.Direction;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.FileAsset;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.FontAsset;
import app.rive.runtime.kotlin.core.ImageAsset;
import app.rive.runtime.kotlin.core.LinearAnimationInstance;
import app.rive.runtime.kotlin.core.Loop;
import app.rive.runtime.kotlin.core.PlayableInstance;
import app.rive.runtime.kotlin.core.RendererType;
import app.rive.runtime.kotlin.core.Rive;
import app.rive.runtime.kotlin.core.RiveAudio;
import app.rive.runtime.kotlin.core.RiveEvent;
import app.rive.runtime.kotlin.core.RiveFont;
import app.rive.runtime.kotlin.core.RiveGeneralEvent;
import app.rive.runtime.kotlin.core.RiveOpenURLEvent;
import app.rive.runtime.kotlin.core.RiveRenderImage;
import app.rive.runtime.kotlin.core.RiveTextValueRun;
import app.rive.runtime.kotlin.core.SMIBoolean;
import app.rive.runtime.kotlin.core.SMIInput;
import app.rive.runtime.kotlin.core.SMINumber;
import app.rive.runtime.kotlin.core.StateMachineInstance;
import app.rive.runtime.kotlin.core.ViewModel;
import app.rive.runtime.kotlin.core.ViewModelBooleanProperty;
import app.rive.runtime.kotlin.core.ViewModelColorProperty;
import app.rive.runtime.kotlin.core.ViewModelEnumProperty;
import app.rive.runtime.kotlin.core.ViewModelInstance;
import app.rive.runtime.kotlin.core.ViewModelNumberProperty;
import app.rive.runtime.kotlin.core.ViewModelProperty;
import app.rive.runtime.kotlin.core.ViewModelStringProperty;
import app.rive.runtime.kotlin.core.ViewModelTriggerProperty;
import app.rive.runtime.kotlin.core.errors.RiveException;
import app.rive.runtime.kotlin.renderers.PointerEvents;
import app.rive.runtime.kotlin.renderers.RiveArtboardRenderer;
import com.android.volley.o;
import com.android.volley.p;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.core.ExceptionsManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.rivereactnative.a;
import com.rivereactnative.y;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.FlowCollector;
import org.jetbrains.annotations.NotNull;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y extends FrameLayout {
    private boolean A;
    private boolean B;
    private RiveFileController.Listener C;
    private RiveFileController.RiveEventListener D;
    private m E;
    private final CoroutineScope F;
    private com.rivereactnative.a G;
    private final Map H;
    private final Lazy I;

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f17701d;

    /* renamed from: e  reason: collision with root package name */
    private k f17702e;

    /* renamed from: i  reason: collision with root package name */
    private String f17703i;

    /* renamed from: o  reason: collision with root package name */
    private int f17704o;

    /* renamed from: p  reason: collision with root package name */
    private String f17705p;

    /* renamed from: q  reason: collision with root package name */
    private String f17706q;

    /* renamed from: r  reason: collision with root package name */
    private String f17707r;

    /* renamed from: s  reason: collision with root package name */
    private String f17708s;

    /* renamed from: t  reason: collision with root package name */
    private Fit f17709t;

    /* renamed from: u  reason: collision with root package name */
    private Float f17710u;

    /* renamed from: v  reason: collision with root package name */
    private Alignment f17711v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f17712w;

    /* renamed from: x  reason: collision with root package name */
    private ReadableMap f17713x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f17714y;

    /* renamed from: z  reason: collision with root package name */
    private ExceptionsManagerModule f17715z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements RiveFileController.Listener {
        a() {
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyAdvance(float f10) {
            RiveFileController.Listener.DefaultImpls.notifyAdvance(this, f10);
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyLoop(PlayableInstance animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            if (animation instanceof LinearAnimationInstance) {
                LinearAnimationInstance linearAnimationInstance = (LinearAnimationInstance) animation;
                y.this.W(linearAnimationInstance.getName(), com.rivereactnative.f.f17631e.a(linearAnimationInstance.getLoop()));
                return;
            }
            throw new IllegalArgumentException("Only animation can be passed as an argument");
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyPause(PlayableInstance animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            if (animation instanceof LinearAnimationInstance) {
                y.Y(y.this, ((LinearAnimationInstance) animation).getName(), false, 2, null);
            }
            if (animation instanceof StateMachineInstance) {
                y.this.X(((StateMachineInstance) animation).getName(), true);
            }
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyPlay(PlayableInstance animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            if (animation instanceof LinearAnimationInstance) {
                y.a0(y.this, ((LinearAnimationInstance) animation).getName(), false, 2, null);
            }
            if (animation instanceof StateMachineInstance) {
                y.this.Z(((StateMachineInstance) animation).getName(), true);
            }
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyStateChanged(String stateMachineName, String stateName) {
            Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
            Intrinsics.checkNotNullParameter(stateName, "stateName");
            y.this.c0(stateMachineName, stateName);
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.Listener
        public void notifyStop(PlayableInstance animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            if (animation instanceof LinearAnimationInstance) {
                y.e0(y.this, ((LinearAnimationInstance) animation).getName(), false, 2, null);
            }
            if (animation instanceof StateMachineInstance) {
                y.this.d0(((StateMachineInstance) animation).getName(), true);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements RiveFileController.RiveEventListener {
        b() {
        }

        @Override // app.rive.runtime.kotlin.controllers.RiveFileController.RiveEventListener
        public void notifyEvent(RiveEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            if (event instanceof RiveGeneralEvent) {
                y.this.b0(event);
            } else if (event instanceof RiveOpenURLEvent) {
                y.this.b0(event);
            }
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: e  reason: collision with root package name */
        public static final c f17718e = new c("PLAY", 0, "onPlay");

        /* renamed from: i  reason: collision with root package name */
        public static final c f17719i = new c("PAUSE", 1, "onPause");

        /* renamed from: o  reason: collision with root package name */
        public static final c f17720o = new c("STOP", 2, "onStop");

        /* renamed from: p  reason: collision with root package name */
        public static final c f17721p = new c("LOOP_END", 3, "onLoopEnd");

        /* renamed from: q  reason: collision with root package name */
        public static final c f17722q = new c("STATE_CHANGED", 4, "onStateChanged");

        /* renamed from: r  reason: collision with root package name */
        public static final c f17723r = new c("RIVE_EVENT", 5, "onRiveEventReceived");

        /* renamed from: s  reason: collision with root package name */
        public static final c f17724s = new c("ERROR", 6, "onError");

        /* renamed from: t  reason: collision with root package name */
        private static final /* synthetic */ c[] f17725t;

        /* renamed from: u  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f17726u;

        /* renamed from: d  reason: collision with root package name */
        private final String f17727d;

        static {
            c[] a10 = a();
            f17725t = a10;
            f17726u = xr.a.a(a10);
        }

        private c(String str, int i10, String str2) {
            this.f17727d = str2;
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f17718e, f17719i, f17720o, f17721p, f17722q, f17723r, f17724s};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f17725t.clone();
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.f17727d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f17728a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f17729b;

        static {
            int[] iArr = new int[com.rivereactnative.g.values().length];
            try {
                iArr[com.rivereactnative.g.f17643o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[com.rivereactnative.g.f17644p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[com.rivereactnative.g.f17642i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[com.rivereactnative.g.f17645q.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[com.rivereactnative.g.f17649u.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[com.rivereactnative.g.f17646r.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[com.rivereactnative.g.f17647s.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[com.rivereactnative.g.f17648t.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            f17728a = iArr;
            int[] iArr2 = new int[ReadableType.values().length];
            try {
                iArr2[ReadableType.Null.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr2[ReadableType.Boolean.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr2[ReadableType.Number.ordinal()] = 3;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr2[ReadableType.String.ordinal()] = 4;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr2[ReadableType.Map.ordinal()] = 5;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr2[ReadableType.Array.ordinal()] = 6;
            } catch (NoSuchFieldError unused14) {
            }
            f17729b = iArr2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends com.android.volley.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f17730d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y f17731e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f17732i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f17733o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ int f17734p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str, y yVar, String str2, int i10, int i11) {
            super(0, str, null);
            this.f17730d = str;
            this.f17731e = yVar;
            this.f17732i = str2;
            this.f17733o = i10;
            this.f17734p = i11;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void g(y yVar, String str, String str2, int i10, int i11) {
            yVar.w(str, str2, i10 + 1, i11);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void h(y yVar, String str, RiveRenderImage riveRenderImage) {
            try {
                ViewModelInstance viewModelInstance = yVar.getViewModelInstance();
                if (viewModelInstance != null) {
                    viewModelInstance.getImageProperty(str).set(riveRenderImage);
                    Log.d("RiveReactNative", "Successfully set image on property");
                    return;
                }
                Log.e("RiveReactNative", "ViewModelInstance is null!");
            } catch (RiveException e10) {
                Log.e("RiveReactNative", "RiveException setting image property", e10);
                yVar.I(e10);
            } catch (Exception e11) {
                Log.e("RiveReactNative", "Exception setting image property", e11);
            }
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0026, code lost:
            if (r2 >= 500) goto L13;
         */
        /* JADX WARN: Removed duplicated region for block: B:17:0x002d  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x006f  */
        @Override // com.android.volley.n
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void deliverError(com.android.volley.u r11) {
            /*
                r10 = this;
                java.lang.String r0 = "error"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
                java.lang.String r0 = "Image download error."
                java.lang.String r1 = "RiveReactNative"
                android.util.Log.d(r1, r0)
                int r0 = r10.f17733o
                int r2 = r10.f17734p
                r3 = 1
                r4 = 0
                if (r0 >= r2) goto L2a
                boolean r2 = r11 instanceof com.android.volley.t
                if (r2 != 0) goto L28
                boolean r2 = r11 instanceof com.android.volley.l
                if (r2 != 0) goto L28
                com.android.volley.k r2 = r11.f8102d
                if (r2 == 0) goto L23
                int r2 = r2.f8073a
                goto L24
            L23:
                r2 = r4
            L24:
                r5 = 500(0x1f4, float:7.0E-43)
                if (r2 < r5) goto L2a
            L28:
                r2 = r3
                goto L2b
            L2a:
                r2 = r4
            L2b:
                if (r2 == 0) goto L6f
                int r0 = r0 - r3
                double r2 = (double) r0
                r4 = 4611686018427387904(0x4000000000000000, double:2.0)
                double r2 = java.lang.Math.pow(r4, r2)
                r11 = 1000(0x3e8, float:1.401E-42)
                double r4 = (double) r11
                double r2 = r2 * r4
                long r2 = (long) r2
                java.lang.StringBuilder r11 = new java.lang.StringBuilder
                r11.<init>()
                java.lang.String r0 = "Retrying image download after "
                r11.append(r0)
                r11.append(r2)
                java.lang.String r0 = "ms"
                r11.append(r0)
                java.lang.String r11 = r11.toString()
                android.util.Log.d(r1, r11)
                android.os.Handler r11 = new android.os.Handler
                android.os.Looper r0 = android.os.Looper.getMainLooper()
                r11.<init>(r0)
                com.rivereactnative.y r5 = r10.f17731e
                java.lang.String r6 = r10.f17730d
                java.lang.String r7 = r10.f17732i
                int r8 = r10.f17733o
                int r9 = r10.f17734p
                com.rivereactnative.a0 r4 = new com.rivereactnative.a0
                r4.<init>()
                r11.postDelayed(r4, r2)
                return
            L6f:
                com.android.volley.k r0 = r11.f8102d
                if (r0 == 0) goto L75
                int r4 = r0.f8073a
            L75:
                boolean r0 = r11 instanceof com.android.volley.t
                if (r0 == 0) goto L7c
                java.lang.String r11 = "Timeout downloading image"
                goto L9f
            L7c:
                boolean r0 = r11 instanceof com.android.volley.l
                if (r0 == 0) goto L83
                java.lang.String r11 = "No connection"
                goto L9f
            L83:
                if (r4 <= 0) goto L97
                java.lang.StringBuilder r11 = new java.lang.StringBuilder
                r11.<init>()
                java.lang.String r0 = "HTTP error "
                r11.append(r0)
                r11.append(r4)
                java.lang.String r11 = r11.toString()
                goto L9f
            L97:
                java.lang.String r11 = r11.getMessage()
                if (r11 != 0) goto L9f
                java.lang.String r11 = "Unknown error"
            L9f:
                int r0 = r10.f17734p
                java.lang.String r2 = r10.f17730d
                java.lang.StringBuilder r3 = new java.lang.StringBuilder
                r3.<init>()
                java.lang.String r4 = "Failed to download image after "
                r3.append(r4)
                r3.append(r0)
                java.lang.String r0 = " attempts: "
                r3.append(r0)
                r3.append(r11)
                java.lang.String r11 = " from "
                r3.append(r11)
                r3.append(r2)
                java.lang.String r11 = r3.toString()
                android.util.Log.e(r1, r11)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.rivereactnative.y.e.deliverError(com.android.volley.u):void");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.android.volley.n
        public com.android.volley.p parseNetworkResponse(com.android.volley.k kVar) {
            com.android.volley.p c10;
            try {
                if (kVar == null) {
                    c10 = com.android.volley.p.a(new com.android.volley.m());
                } else {
                    c10 = com.android.volley.p.c(kVar.f8074b, c6.e.e(kVar));
                }
                Intrinsics.checkNotNull(c10);
                return c10;
            } catch (Exception e10) {
                com.android.volley.p a10 = com.android.volley.p.a(new com.android.volley.m(e10));
                Intrinsics.checkNotNull(a10);
                return a10;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.android.volley.n
        public void deliverResponse(byte[] response) {
            RendererType defaultRendererType;
            Intrinsics.checkNotNullParameter(response, "response");
            int length = response.length;
            Log.d("RiveReactNative", "Image downloaded successfully: " + length + " bytes.");
            try {
                k kVar = this.f17731e.f17702e;
                if (kVar != null) {
                    RiveFileController controller = kVar.getController();
                    if (controller != null) {
                        File file = controller.getFile();
                        if (file != null) {
                            defaultRendererType = file.getRendererType();
                            if (defaultRendererType == null) {
                            }
                            final RiveRenderImage make = RiveRenderImage.Companion.make(response, defaultRendererType);
                            Handler handler = new Handler(Looper.getMainLooper());
                            final y yVar = this.f17731e;
                            final String str = this.f17732i;
                            handler.post(new Runnable() { // from class: com.rivereactnative.z
                                @Override // java.lang.Runnable
                                public final void run() {
                                    y.e.h(y.this, str, make);
                                }
                            });
                        }
                    }
                }
                defaultRendererType = Rive.INSTANCE.getDefaultRendererType();
                final RiveRenderImage make2 = RiveRenderImage.Companion.make(response, defaultRendererType);
                Handler handler2 = new Handler(Looper.getMainLooper());
                final y yVar2 = this.f17731e;
                final String str2 = this.f17732i;
                handler2.post(new Runnable() { // from class: com.rivereactnative.z
                    @Override // java.lang.Runnable
                    public final void run() {
                        y.e.h(y.this, str2, make2);
                    }
                });
            } catch (RiveException e10) {
                Log.e("RiveReactNative", "RiveException creating image from downloaded data", e10);
                this.f17731e.I(e10);
            } catch (Exception e11) {
                Log.e("RiveReactNative", "Exception creating image from downloaded data", e11);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17735d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ URI f17736e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ p.b f17737i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ y f17738o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f17739d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ p.b f17740e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ byte[] f17741i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(p.b bVar, byte[] bArr, Continuation continuation) {
                super(2, continuation);
                this.f17740e = bVar;
                this.f17741i = bArr;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f17740e, this.f17741i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f17739d == 0) {
                    kotlin.c.b(obj);
                    this.f17740e.a(this.f17741i);
                    return Unit.f32056a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f17742d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ y f17743e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ URI f17744i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ com.android.volley.u f17745o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(y yVar, URI uri, com.android.volley.u uVar, Continuation continuation) {
                super(2, continuation);
                this.f17743e = yVar;
                this.f17744i = uri;
                this.f17745o = uVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f17743e, this.f17744i, this.f17745o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f17742d == 0) {
                    kotlin.c.b(obj);
                    y yVar = this.f17743e;
                    String uri = this.f17744i.toString();
                    Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
                    yVar.N(uri, this.f17745o, this.f17743e.A);
                    return Unit.f32056a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(URI uri, p.b bVar, y yVar, Continuation continuation) {
            super(2, continuation);
            this.f17736e = uri;
            this.f17737i = bVar;
            this.f17738o = yVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f17736e, this.f17737i, this.f17738o, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:30:0x00c2, code lost:
            if (os.g.g(r0, r4, r11) != r1) goto L7;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r12) {
            /*
                r11 = this;
                java.lang.Object r1 = wr.b.f()
                int r0 = r11.f17735d
                r2 = 0
                r3 = 2
                r4 = 1
                if (r0 == 0) goto L24
                if (r0 == r4) goto L1c
                if (r0 != r3) goto L14
                kotlin.c.b(r12)
                goto Lc5
            L14:
                java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r12.<init>(r0)
                throw r12
            L1c:
                kotlin.c.b(r12)     // Catch: java.lang.Exception -> L21
                goto Lc5
            L21:
                r0 = move-exception
                r12 = r0
                goto L90
            L24:
                kotlin.c.b(r12)
                java.io.File r12 = new java.io.File     // Catch: java.lang.Exception -> L21
                java.net.URI r0 = r11.f17736e     // Catch: java.lang.Exception -> L21
                java.lang.String r0 = r0.getPath()     // Catch: java.lang.Exception -> L21
                r12.<init>(r0)     // Catch: java.lang.Exception -> L21
                boolean r0 = r12.exists()     // Catch: java.lang.Exception -> L21
                if (r0 == 0) goto L73
                boolean r0 = r12.canRead()     // Catch: java.lang.Exception -> L21
                if (r0 == 0) goto L56
                byte[] r12 = bs.j.h(r12)     // Catch: java.lang.Exception -> L21
                os.c1 r0 = os.m0.c()     // Catch: java.lang.Exception -> L21
                com.rivereactnative.y$f$a r5 = new com.rivereactnative.y$f$a     // Catch: java.lang.Exception -> L21
                com.android.volley.p$b r6 = r11.f17737i     // Catch: java.lang.Exception -> L21
                r5.<init>(r6, r12, r2)     // Catch: java.lang.Exception -> L21
                r11.f17735d = r4     // Catch: java.lang.Exception -> L21
                java.lang.Object r12 = os.g.g(r0, r5, r11)     // Catch: java.lang.Exception -> L21
                if (r12 != r1) goto Lc5
                goto Lc4
            L56:
                java.io.IOException r12 = new java.io.IOException     // Catch: java.lang.Exception -> L21
                java.net.URI r0 = r11.f17736e     // Catch: java.lang.Exception -> L21
                java.lang.String r0 = r0.getPath()     // Catch: java.lang.Exception -> L21
                java.lang.StringBuilder r4 = new java.lang.StringBuilder     // Catch: java.lang.Exception -> L21
                r4.<init>()     // Catch: java.lang.Exception -> L21
                java.lang.String r5 = "Permission denied: "
                r4.append(r5)     // Catch: java.lang.Exception -> L21
                r4.append(r0)     // Catch: java.lang.Exception -> L21
                java.lang.String r0 = r4.toString()     // Catch: java.lang.Exception -> L21
                r12.<init>(r0)     // Catch: java.lang.Exception -> L21
                throw r12     // Catch: java.lang.Exception -> L21
            L73:
                java.io.FileNotFoundException r12 = new java.io.FileNotFoundException     // Catch: java.lang.Exception -> L21
                java.net.URI r0 = r11.f17736e     // Catch: java.lang.Exception -> L21
                java.lang.String r0 = r0.getPath()     // Catch: java.lang.Exception -> L21
                java.lang.StringBuilder r4 = new java.lang.StringBuilder     // Catch: java.lang.Exception -> L21
                r4.<init>()     // Catch: java.lang.Exception -> L21
                java.lang.String r5 = "File not found: "
                r4.append(r5)     // Catch: java.lang.Exception -> L21
                r4.append(r0)     // Catch: java.lang.Exception -> L21
                java.lang.String r0 = r4.toString()     // Catch: java.lang.Exception -> L21
                r12.<init>(r0)     // Catch: java.lang.Exception -> L21
                throw r12     // Catch: java.lang.Exception -> L21
            L90:
                boolean r0 = r12 instanceof java.io.FileNotFoundException
                if (r0 == 0) goto La9
                com.android.volley.u r12 = new com.android.volley.u
                com.android.volley.k r4 = new com.android.volley.k
                r8 = 0
                java.util.List r10 = kotlin.collections.CollectionsKt.l()
                r5 = 404(0x194, float:5.66E-43)
                r6 = 0
                r7 = 0
                r4.<init>(r5, r6, r7, r8, r10)
                r12.<init>(r4)
                goto Laf
            La9:
                com.android.volley.u r0 = new com.android.volley.u
                r0.<init>(r12)
                r12 = r0
            Laf:
                os.c1 r0 = os.m0.c()
                com.rivereactnative.y$f$b r4 = new com.rivereactnative.y$f$b
                com.rivereactnative.y r5 = r11.f17738o
                java.net.URI r6 = r11.f17736e
                r4.<init>(r5, r6, r12, r2)
                r11.f17735d = r3
                java.lang.Object r12 = os.g.g(r0, r4, r11)
                if (r12 != r1) goto Lc5
            Lc4:
                return r1
            Lc5:
                kotlin.Unit r12 = kotlin.Unit.f32056a
                return r12
            */
            throw new UnsupportedOperationException("Method not decompiled: com.rivereactnative.y.f.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17746d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ com.rivereactnative.g f17747e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ViewModelProperty f17748i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ y f17749o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ String f17750p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ y f17751d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f17752e;

            a(y yVar, String str) {
                this.f17751d = yVar;
                this.f17752e = str;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(Object obj, Continuation continuation) {
                this.f17751d.p0(this.f17752e, null);
                return Unit.f32056a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ y f17753d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f17754e;

            b(y yVar, String str) {
                this.f17753d = yVar;
                this.f17754e = str;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(Object obj, Continuation continuation) {
                this.f17753d.p0(this.f17754e, null);
                return Unit.f32056a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ y f17755d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f17756e;

            c(y yVar, String str) {
                this.f17755d = yVar;
                this.f17756e = str;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public final Object emit(Object obj, Continuation continuation) {
                this.f17755d.p0(this.f17756e, obj);
                return Unit.f32056a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class d {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f17757a;

            static {
                int[] iArr = new int[com.rivereactnative.g.values().length];
                try {
                    iArr[com.rivereactnative.g.f17646r.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[com.rivereactnative.g.f17648t.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f17757a = iArr;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(com.rivereactnative.g gVar, ViewModelProperty viewModelProperty, y yVar, String str, Continuation continuation) {
            super(2, continuation);
            this.f17747e = gVar;
            this.f17748i = viewModelProperty;
            this.f17749o = yVar;
            this.f17750p = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f17747e, this.f17748i, this.f17749o, this.f17750p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x004b, code lost:
            if (r6.collect(r1, r5) == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x0069, code lost:
            if (r6.collect(r1, r5) == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x008b, code lost:
            if (r6.collect(r1, r5) == r0) goto L23;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = wr.b.f()
                int r1 = r5.f17746d
                r2 = 3
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L25
                if (r1 == r4) goto L21
                if (r1 == r3) goto L1d
                if (r1 == r2) goto L19
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L19:
                kotlin.c.b(r6)
                goto L4e
            L1d:
                kotlin.c.b(r6)
                goto L6c
            L21:
                kotlin.c.b(r6)
                goto L8e
            L25:
                kotlin.c.b(r6)
                com.rivereactnative.g r6 = r5.f17747e
                int[] r1 = com.rivereactnative.y.g.d.f17757a
                int r6 = r6.ordinal()
                r6 = r1[r6]
                if (r6 == r4) goto L72
                if (r6 == r3) goto L54
                app.rive.runtime.kotlin.core.ViewModelProperty r6 = r5.f17748i
                rs.j0 r6 = r6.getValueFlow()
                com.rivereactnative.y$g$c r1 = new com.rivereactnative.y$g$c
                com.rivereactnative.y r3 = r5.f17749o
                java.lang.String r4 = r5.f17750p
                r1.<init>(r3, r4)
                r5.f17746d = r2
                java.lang.Object r6 = r6.collect(r1, r5)
                if (r6 != r0) goto L4e
                goto L8d
            L4e:
                qr.h r6 = new qr.h
                r6.<init>()
                throw r6
            L54:
                app.rive.runtime.kotlin.core.ViewModelProperty r6 = r5.f17748i
                rs.j0 r6 = r6.getValueFlow()
                com.rivereactnative.y$g$b r1 = new com.rivereactnative.y$g$b
                com.rivereactnative.y r2 = r5.f17749o
                java.lang.String r4 = r5.f17750p
                r1.<init>(r2, r4)
                r5.f17746d = r3
                java.lang.Object r6 = r6.collect(r1, r5)
                if (r6 != r0) goto L6c
                goto L8d
            L6c:
                qr.h r6 = new qr.h
                r6.<init>()
                throw r6
            L72:
                app.rive.runtime.kotlin.core.ViewModelProperty r6 = r5.f17748i
                rs.j0 r6 = r6.getValueFlow()
                kotlinx.coroutines.flow.Flow r6 = rs.g.m(r6, r4)
                com.rivereactnative.y$g$a r1 = new com.rivereactnative.y$g$a
                com.rivereactnative.y r2 = r5.f17749o
                java.lang.String r3 = r5.f17750p
                r1.<init>(r2, r3)
                r5.f17746d = r4
                java.lang.Object r6 = r6.collect(r1, r5)
                if (r6 != r0) goto L8e
            L8d:
                return r0
            L8e:
                kotlin.Unit r6 = kotlin.Unit.f32056a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: com.rivereactnative.y.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class h extends FunctionReferenceImpl implements Function2 {
        h(Object obj) {
            super(2, obj, y.class, "loadAsset", "loadAsset(Lcom/facebook/react/bridge/ReadableMap;Lapp/rive/runtime/kotlin/core/FileAsset;)V", 0);
        }

        public final void a(ReadableMap p02, FileAsset p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            ((y) this.receiver).R(p02, p12);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((ReadableMap) obj, (FileAsset) obj2);
            return Unit.f32056a;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(ThemedReactContext context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f17701d = context;
        this.f17704o = -1;
        this.f17709t = Fit.CONTAIN;
        this.f17711v = Alignment.CENTER;
        this.f17714y = true;
        this.F = kotlinx.coroutines.i.a(m0.a());
        this.H = new LinkedHashMap();
        this.I = qr.l.a(new Function0() { // from class: com.rivereactnative.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                com.android.volley.o O;
                O = y.O(y.this);
                return O;
            }
        });
        this.f17702e = new k(context);
        this.C = new a();
        this.D = new b();
        n();
        this.f17712w = false;
        addView(this.f17702e);
    }

    private final int F(String str) {
        for (String str2 : CollectionsKt.o("raw", "drawable")) {
            int identifier = this.f17701d.getResources().getIdentifier(str, str2, this.f17701d.getPackageName());
            if (identifier != 0) {
                return identifier;
            }
        }
        return 0;
    }

    private final void F0(String str, final boolean z10) {
        x(str, new p.b() { // from class: com.rivereactnative.w
            @Override // com.android.volley.p.b
            public final void a(Object obj) {
                y.H0(y.this, z10, (byte[]) obj);
            }
        });
    }

    private final void G() {
        if (this.A) {
            com.rivereactnative.h hVar = com.rivereactnative.h.f17654o;
            hVar.e("File resource not found. You must provide correct url or resourceName!");
            o0(hVar);
            return;
        }
        throw new IllegalStateException("File resource not found. You must provide correct url or resourceName!");
    }

    static /* synthetic */ void G0(y yVar, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = yVar.f17712w;
        }
        yVar.F0(str, z10);
    }

    private final void H(String str) {
        if (this.A) {
            com.rivereactnative.h hVar = com.rivereactnative.h.f17656q;
            hVar.e("Invalid URL: " + str);
            o0(hVar);
            return;
        }
        I0("Invalid URL: " + str, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void H0(y yVar, boolean z10, byte[] bArr) {
        try {
            k kVar = yVar.f17702e;
            if (kVar != null) {
                Intrinsics.checkNotNull(bArr);
                Fit fit = yVar.f17709t;
                Alignment alignment = yVar.f17711v;
                boolean shouldAutoBind = yVar.getShouldAutoBind();
                String str = yVar.f17707r;
                RiveAnimationView.setRiveBytes$default(kVar, bArr, yVar.f17708s, yVar.f17706q, str, z10, shouldAutoBind, fit, alignment, null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null);
            }
            yVar.q();
            yVar.q0();
        } catch (RiveException e10) {
            yVar.I(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void I(RiveException riveException) {
        if (this.A) {
            com.rivereactnative.h a10 = com.rivereactnative.h.f17653i.a(riveException);
            if (a10 != null) {
                o0(a10);
                return;
            }
            return;
        }
        I0(String.valueOf(riveException.getMessage()), riveException);
    }

    private final void I0(String str, Throwable th2) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("message", str);
        if (th2 != null) {
            StackTraceElement[] stackTrace = th2.getStackTrace();
            Intrinsics.checkNotNullExpressionValue(stackTrace, "getStackTrace(...)");
            createMap.putArray(StackTraceHelper.STACK_KEY, u(stackTrace));
        }
        ExceptionsManagerModule exceptionsManagerModule = this.f17715z;
        if (exceptionsManagerModule != null) {
            exceptionsManagerModule.reportException(createMap);
        }
    }

    private final void J(String str, String str2, FileAsset fileAsset) {
        if (str2 != null) {
            str = s(str, str2);
        }
        byte[] i02 = i0(this.f17701d, str);
        if (i02 != null) {
            h0(i02, fileAsset);
        }
    }

    private final void K(String str, FileAsset fileAsset) {
        Object b10;
        try {
            Result.a aVar = Result.f32053e;
            b10 = Result.b(Uri.parse(str).getScheme());
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        String str2 = null;
        if (Result.g(b10)) {
            b10 = null;
        }
        if (((String) b10) != null) {
            L(str, fileAsset);
            return;
        }
        int F = F(str);
        if (F != 0) {
            try {
                InputStream openRawResource = getResources().openRawResource(F);
                try {
                    Intrinsics.checkNotNull(openRawResource);
                    h0(bs.b.c(openRawResource), fileAsset);
                    Unit unit = Unit.f32056a;
                    bs.c.a(openRawResource, null);
                } catch (Throwable th3) {
                    try {
                        throw th3;
                    } catch (Throwable th4) {
                        bs.c.a(openRawResource, th3);
                        throw th4;
                    }
                }
            } catch (Resources.NotFoundException unused) {
                str2 = "Resource not found: " + str;
            } catch (IOException unused2) {
                str2 = "IO Exception while reading resource: " + str;
            } catch (Exception unused3) {
                str2 = "Unexpected error while processing resource: " + str;
            }
        } else {
            str2 = "Resource not found: " + str;
        }
        if (str2 != null) {
            if (this.A) {
                com.rivereactnative.h hVar = com.rivereactnative.h.f17654o;
                hVar.e(str2);
                o0(hVar);
                return;
            }
            throw new IllegalStateException(str2);
        }
    }

    private final void L(String str, final FileAsset fileAsset) {
        x(str, new p.b() { // from class: com.rivereactnative.v
            @Override // com.android.volley.p.b
            public final void a(Object obj) {
                y.M(y.this, fileAsset, (byte[]) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void M(y yVar, FileAsset fileAsset, byte[] bArr) {
        Intrinsics.checkNotNull(bArr);
        yVar.h0(bArr, fileAsset);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void N(String str, com.android.volley.u uVar, boolean z10) {
        com.android.volley.k kVar = uVar.f8102d;
        if (kVar != null && kVar.f8073a == 404) {
            if (z10) {
                com.rivereactnative.h hVar = com.rivereactnative.h.f17656q;
                hVar.e("Bad URL: " + str);
                o0(hVar);
                return;
            }
            I0("Bad URL: " + str, uVar);
        } else if (z10) {
            com.rivereactnative.h hVar2 = com.rivereactnative.h.f17656q;
            hVar2.e("Unable to download the Rive asset file from: " + str);
            o0(hVar2);
        } else {
            I0("Unable to download Rive asset file " + str, uVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final com.android.volley.o O(y yVar) {
        com.android.volley.o a10 = c6.k.a(yVar.f17701d);
        Intrinsics.checkNotNullExpressionValue(a10, "newRequestQueue(...)");
        return a10;
    }

    private final boolean P(String str) {
        try {
            new URL(str);
            return true;
        } catch (MalformedURLException unused) {
            return false;
        }
    }

    private final void P0() {
        m mVar;
        Map b10;
        ReadableMap readableMap = this.f17713x;
        if (readableMap != null && (mVar = this.E) != null && (b10 = mVar.b()) != null) {
            Set j10 = x0.j(CollectionsKt.l1(Q(readableMap)), CollectionsKt.l1(b10.keySet()));
            if (!j10.isEmpty()) {
                String str = "referencedAssets provided keys: " + CollectionsKt.x0(j10, ",", null, null, 0, null, null, 62, null) + " but they were not referenced in the rive file";
                if (this.A) {
                    com.rivereactnative.h hVar = com.rivereactnative.h.f17664y;
                    hVar.e(str);
                    o0(hVar);
                    return;
                }
                Log.w("RiveReactNative", str);
            }
        }
    }

    private final List Q(ReadableMap readableMap) {
        ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
        ArrayList arrayList = new ArrayList();
        while (keySetIterator.hasNextKey()) {
            arrayList.add(keySetIterator.nextKey());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(ReadableMap readableMap, FileAsset fileAsset) {
        String string = readableMap.getString("sourceAssetId");
        String string2 = readableMap.getString("sourceUrl");
        String string3 = readableMap.getString("sourceAsset");
        if (string != null) {
            K(string, fileAsset);
        } else if (string2 != null) {
            L(string2, fileAsset);
        } else if (string3 != null) {
            J(string3, readableMap.getString("path"), fileAsset);
        }
    }

    private final void S(URI uri, p.b bVar) {
        os.i.d(kotlinx.coroutines.i.a(m0.b()), null, null, new f(uri, bVar, this, null), 3, null);
    }

    private final void T(final String str, p.b bVar) {
        com.android.volley.o a10 = c6.k.a(this.f17701d);
        Intrinsics.checkNotNullExpressionValue(a10, "newRequestQueue(...)");
        a10.a(new i(str, bVar, new p.a() { // from class: com.rivereactnative.x
            @Override // com.android.volley.p.a
            public final void a(com.android.volley.u uVar) {
                y.U(y.this, str, uVar);
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(y yVar, String str, com.android.volley.u uVar) {
        Intrinsics.checkNotNull(uVar);
        yVar.N(str, uVar, yVar.A);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean V(com.android.volley.n nVar) {
        return true;
    }

    public static /* synthetic */ void Y(y yVar, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        yVar.X(str, z10);
    }

    public static /* synthetic */ void a0(y yVar, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        yVar.Z(str, z10);
    }

    public static /* synthetic */ void e0(y yVar, String str, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        yVar.d0(str, z10);
    }

    private final com.android.volley.o getImageRequestQueue() {
        return (com.android.volley.o) this.I.getValue();
    }

    private final String getLoadedTag() {
        int id2 = getId();
        return "RiveReactNativeLoaded:" + id2;
    }

    private final boolean getShouldAutoBind() {
        com.rivereactnative.a aVar = this.G;
        if ((aVar instanceof a.C0208a) && ((a.C0208a) aVar).a()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ViewModelInstance getViewModelInstance() {
        RiveFileController controller;
        Artboard activeArtboard;
        k kVar = this.f17702e;
        if (kVar != null && (controller = kVar.getController()) != null && (activeArtboard = controller.getActiveArtboard()) != null) {
            return activeArtboard.getViewModelInstance();
        }
        return null;
    }

    private final void h0(byte[] bArr, FileAsset fileAsset) {
        if (fileAsset instanceof ImageAsset) {
            ((ImageAsset) fileAsset).setImage(RiveRenderImage.Companion.make$default(RiveRenderImage.Companion, bArr, null, 2, null));
        } else if (fileAsset instanceof FontAsset) {
            ((FontAsset) fileAsset).setFont(RiveFont.Companion.make$default(RiveFont.Companion, bArr, null, 2, null));
        } else if (fileAsset instanceof AudioAsset) {
            ((AudioAsset) fileAsset).setAudio(RiveAudio.Companion.make$default(RiveAudio.Companion, bArr, null, 2, null));
        } else {
            throw new qr.p();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0056  */
    /* JADX WARN: Type inference failed for: r0v0 */
    /* JADX WARN: Type inference failed for: r0v1, types: [java.io.InputStream] */
    /* JADX WARN: Type inference failed for: r0v2 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final byte[] i0(android.content.Context r5, java.lang.String r6) {
        /*
            r4 = this;
            android.content.res.AssetManager r5 = r5.getAssets()
            r0 = 0
            java.io.InputStream r5 = r5.open(r6)     // Catch: java.lang.Throwable -> L18 java.io.IOException -> L1a
            byte[] r6 = bs.b.c(r5)     // Catch: java.lang.Throwable -> L13 java.io.IOException -> L16
            if (r5 == 0) goto L12
            r5.close()
        L12:
            return r6
        L13:
            r6 = move-exception
            r0 = r5
            goto L54
        L16:
            r1 = move-exception
            goto L1c
        L18:
            r6 = move-exception
            goto L54
        L1a:
            r1 = move-exception
            r5 = r0
        L1c:
            boolean r2 = r4.A     // Catch: java.lang.Throwable -> L13
            if (r2 == 0) goto L3a
            com.rivereactnative.h r1 = com.rivereactnative.h.f17656q     // Catch: java.lang.Throwable -> L13
            java.lang.StringBuilder r2 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L13
            r2.<init>()     // Catch: java.lang.Throwable -> L13
            java.lang.String r3 = "Unable to read file from assets: "
            r2.append(r3)     // Catch: java.lang.Throwable -> L13
            r2.append(r6)     // Catch: java.lang.Throwable -> L13
            java.lang.String r6 = r2.toString()     // Catch: java.lang.Throwable -> L13
            r1.e(r6)     // Catch: java.lang.Throwable -> L13
            r4.o0(r1)     // Catch: java.lang.Throwable -> L13
            goto L4e
        L3a:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L13
            r2.<init>()     // Catch: java.lang.Throwable -> L13
            java.lang.String r3 = "Unable to read file from assets "
            r2.append(r3)     // Catch: java.lang.Throwable -> L13
            r2.append(r6)     // Catch: java.lang.Throwable -> L13
            java.lang.String r6 = r2.toString()     // Catch: java.lang.Throwable -> L13
            r4.I0(r6, r1)     // Catch: java.lang.Throwable -> L13
        L4e:
            if (r5 == 0) goto L53
            r5.close()
        L53:
            return r0
        L54:
            if (r0 == 0) goto L59
            r0.close()
        L59:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.rivereactnative.y.i0(android.content.Context, java.lang.String):byte[]");
    }

    private final void k0() {
        m mVar;
        k kVar;
        if (this.f17714y) {
            m mVar2 = this.E;
            if (mVar2 != null) {
                mVar2.dispose();
            }
            ReadableMap readableMap = this.f17713x;
            if (readableMap != null) {
                mVar = new m(readableMap, new h(this));
            } else {
                mVar = null;
            }
            this.E = mVar;
            if (mVar != null && (kVar = this.f17702e) != null) {
                kVar.setAssetLoader(mVar);
            }
            String str = this.f17705p;
            if (str != null) {
                if (this.f17704o == -1) {
                    G0(this, str, false, 2, null);
                } else {
                    throw new IllegalStateException("You cannot pass both resourceName and url at the same time");
                }
            } else {
                int i10 = this.f17704o;
                if (i10 != -1) {
                    try {
                        k kVar2 = this.f17702e;
                        if (kVar2 != null) {
                            Fit fit = this.f17709t;
                            Alignment alignment = this.f17711v;
                            RiveAnimationView.setRiveResource$default(kVar2, i10, this.f17708s, this.f17706q, this.f17707r, this.f17712w, getShouldAutoBind(), fit, alignment, null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, null);
                        }
                        P0();
                        q();
                        q0();
                        this.f17705p = null;
                    } catch (RiveException e10) {
                        I(e10);
                    }
                } else {
                    G();
                }
            }
            this.f17714y = false;
        }
    }

    private final void l0() {
        o();
        k kVar = this.f17702e;
        if (kVar != null) {
            kVar.unregisterListener(this.C);
        }
        k kVar2 = this.f17702e;
        if (kVar2 != null) {
            kVar2.removeEventListener(this.D);
        }
    }

    private final void m0(String str) {
        Job b10;
        com.rivereactnative.b bVar = (com.rivereactnative.b) this.H.get(str);
        if (bVar != null && (b10 = bVar.b()) != null) {
            Job.a.a(b10, null, 1, null);
        }
        this.H.remove(str);
    }

    private final void n() {
        k kVar = this.f17702e;
        if (kVar != null) {
            kVar.registerListener(this.C);
        }
        k kVar2 = this.f17702e;
        if (kVar2 != null) {
            kVar2.addEventListener(this.D);
        }
    }

    private final void o() {
        for (com.rivereactnative.b bVar : this.H.values()) {
            Job.a.a(bVar.b(), null, 1, null);
        }
        this.H.clear();
    }

    private final void o0(com.rivereactnative.h hVar) {
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("type", hVar.toString());
        createMap.putString("message", hVar.d());
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17724s.toString(), createMap);
    }

    private final void p() {
        this.E = null;
        this.f17702e = null;
        this.f17715z = null;
        this.f17713x = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p0(String str, Object obj) {
        ((DeviceEventManagerModule.RCTDeviceEventEmitter) this.f17701d.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit(str, obj);
    }

    private final void q() {
        RiveFileController controller;
        File file;
        k kVar;
        RiveFileController controller2;
        Artboard activeArtboard;
        try {
            k kVar2 = this.f17702e;
            if (kVar2 != null && (controller = kVar2.getController()) != null && (file = controller.getFile()) != null && (kVar = this.f17702e) != null && (controller2 = kVar.getController()) != null && (activeArtboard = controller2.getActiveArtboard()) != null) {
                ViewModel defaultViewModelForArtboard = file.defaultViewModelForArtboard(activeArtboard);
                com.rivereactnative.a aVar = this.G;
                if (aVar instanceof a.C0208a) {
                    this.f17714y = true;
                } else if (aVar instanceof a.c) {
                    r(this, defaultViewModelForArtboard.createInstanceFromIndex(((a.c) aVar).a()));
                } else if (aVar instanceof a.d) {
                    r(this, defaultViewModelForArtboard.createInstanceFromName(((a.d) aVar).a()));
                } else if (aVar instanceof a.b) {
                    r(this, defaultViewModelForArtboard.createBlankInstance());
                } else if (aVar != null) {
                    throw new qr.p();
                }
            }
        } catch (RiveException e10) {
            I(e10);
        } catch (Exception e11) {
            I0("Unexpected error during data binding configuration", e11);
        }
    }

    private final void q0() {
        p0(getLoadedTag(), null);
    }

    private static final void r(y yVar, ViewModelInstance viewModelInstance) {
        RiveFileController controller;
        Artboard activeArtboard;
        RiveFileController controller2;
        List<StateMachineInstance> stateMachines;
        StateMachineInstance stateMachineInstance;
        k kVar = yVar.f17702e;
        if (kVar != null && (controller2 = kVar.getController()) != null && (stateMachines = controller2.getStateMachines()) != null && (stateMachineInstance = (StateMachineInstance) CollectionsKt.o0(stateMachines)) != null) {
            stateMachineInstance.setViewModelInstance(viewModelInstance);
        }
        k kVar2 = yVar.f17702e;
        if (kVar2 != null && (controller = kVar2.getController()) != null && (activeArtboard = controller.getActiveArtboard()) != null) {
            activeArtboard.setViewModelInstance(viewModelInstance);
        }
        for (Pair pair : o0.A(yVar.H)) {
            com.rivereactnative.b bVar = (com.rivereactnative.b) pair.b();
            if (!Intrinsics.areEqual(bVar.a(), viewModelInstance)) {
                yVar.j0(bVar.c(), bVar.d());
            }
        }
    }

    private final String s(String str, String str2) {
        StringBuilder sb2;
        if (StringsKt.z(str2, "/", false, 2, null)) {
            sb2 = new StringBuilder();
            sb2.append(str2);
        } else {
            sb2 = new StringBuilder();
            sb2.append(str2);
            sb2.append("/");
        }
        sb2.append(str);
        return sb2.toString();
    }

    private final WritableMap t(HashMap hashMap) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        for (Map.Entry entry : hashMap.entrySet()) {
            String str = (String) entry.getKey();
            Object value = entry.getValue();
            if (value instanceof String) {
                createMap.putString(str, (String) value);
            } else if (value instanceof Integer) {
                createMap.putInt(str, ((Number) value).intValue());
            } else if (value instanceof Float) {
                createMap.putDouble(str, ((Number) value).floatValue());
            } else if (value instanceof Double) {
                createMap.putDouble(str, ((Number) value).doubleValue());
            } else if (value instanceof Boolean) {
                createMap.putBoolean(str, ((Boolean) value).booleanValue());
            }
        }
        return createMap;
    }

    private final ReadableArray u(StackTraceElement[] stackTraceElementArr) {
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        for (StackTraceElement stackTraceElement : stackTraceElementArr) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putString("methodName", stackTraceElement.getMethodName());
            createMap.putInt("lineNumber", stackTraceElement.getLineNumber());
            createMap.putString("file", stackTraceElement.getFileName());
            createArray.pushMap(createMap);
        }
        return createArray;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w(String str, String str2, int i10, int i11) {
        Log.d("RiveReactNative", "Downloading image (attempt " + i10 + "/" + i11 + "): " + str);
        e eVar = new e(str, this, str2, i10, i11);
        eVar.setRetryPolicy(new com.android.volley.e(30000, 0, 1.0f));
        getImageRequestQueue().a(eVar);
    }

    private final void x(String str, p.b bVar) {
        if (!P(str)) {
            H(str);
            return;
        }
        try {
            URI uri = new URI(str);
            if (Intrinsics.areEqual(uri.getScheme(), "file")) {
                S(uri, bVar);
            } else {
                T(str, bVar);
            }
        } catch (URISyntaxException unused) {
            H(str);
        }
    }

    public final void A(String path) {
        ViewModelTriggerProperty triggerProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (triggerProperty = viewModelInstance.getTriggerProperty(path)) != null) {
                triggerProperty.trigger();
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void A0(String stateMachineName, String inputName, float f10) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.setNumberState(stateMachineName, inputName, f10);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final Boolean B(String inputName) {
        StateMachineInstance stateMachineInstance;
        SMIInput sMIInput;
        RiveFileController controller;
        List<StateMachineInstance> stateMachines;
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null && (stateMachines = controller.getStateMachines()) != null) {
                stateMachineInstance = stateMachines.get(0);
            } else {
                stateMachineInstance = null;
            }
            if (stateMachineInstance != null) {
                sMIInput = stateMachineInstance.input(inputName);
            } else {
                sMIInput = null;
            }
            if (!(sMIInput instanceof SMIBoolean)) {
                return null;
            }
            return Boolean.valueOf(((SMIBoolean) sMIInput).getValue());
        } catch (RiveException e10) {
            I(e10);
            return null;
        }
    }

    public final void B0(String inputName, float f10, String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.setNumberStateAtPath(inputName, f10, path);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final Boolean C(String inputName, String path) {
        Artboard artboard;
        SMIInput sMIInput;
        RiveFileController controller;
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null) {
                artboard = controller.getActiveArtboard();
            } else {
                artboard = null;
            }
            if (artboard != null) {
                sMIInput = artboard.input(inputName, path);
            } else {
                sMIInput = null;
            }
            if (!(sMIInput instanceof SMIBoolean)) {
                return null;
            }
            return Boolean.valueOf(((SMIBoolean) sMIInput).getValue());
        } catch (RiveException e10) {
            I(e10);
            return null;
        }
    }

    public final void C0(String path, String value) {
        ViewModelStringProperty stringProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(value, "value");
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (stringProperty = viewModelInstance.getStringProperty(path)) != null) {
                stringProperty.setValue(value);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final Float D(String inputName) {
        StateMachineInstance stateMachineInstance;
        SMIInput sMIInput;
        RiveFileController controller;
        List<StateMachineInstance> stateMachines;
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null && (stateMachines = controller.getStateMachines()) != null) {
                stateMachineInstance = stateMachines.get(0);
            } else {
                stateMachineInstance = null;
            }
            if (stateMachineInstance != null) {
                sMIInput = stateMachineInstance.input(inputName);
            } else {
                sMIInput = null;
            }
            if (!(sMIInput instanceof SMINumber)) {
                return null;
            }
            return Float.valueOf(((SMINumber) sMIInput).getValue());
        } catch (RiveException e10) {
            I(e10);
            return null;
        }
    }

    public final void D0(String textRunName, String textValue) {
        RiveFileController controller;
        Artboard activeArtboard;
        RiveTextValueRun textRun;
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null && (activeArtboard = controller.getActiveArtboard()) != null && (textRun = activeArtboard.textRun(textRunName)) != null) {
                textRun.setText(textValue);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final Float E(String inputName, String path) {
        Artboard artboard;
        SMIInput sMIInput;
        RiveFileController controller;
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null) {
                artboard = controller.getActiveArtboard();
            } else {
                artboard = null;
            }
            if (artboard != null) {
                sMIInput = artboard.input(inputName, path);
            } else {
                sMIInput = null;
            }
            if (!(sMIInput instanceof SMINumber)) {
                return null;
            }
            return Float.valueOf(((SMINumber) sMIInput).getValue());
        } catch (RiveException e10) {
            I(e10);
            return null;
        }
    }

    public final void E0(String textRunName, String textValue, String path) {
        RiveFileController controller;
        Artboard activeArtboard;
        RiveTextValueRun textRun;
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null && (activeArtboard = controller.getActiveArtboard()) != null && (textRun = activeArtboard.textRun(textRunName, path)) != null) {
                textRun.setText(textValue);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void J0() {
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.stop();
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final List K0(ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "<this>");
        ArrayList arrayList = new ArrayList();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            Object obj = null;
            switch (d.f17729b[readableArray.getType(i10).ordinal()]) {
                case 1:
                    arrayList.add(null);
                    break;
                case 2:
                    arrayList.add(Boolean.valueOf(readableArray.getBoolean(i10)));
                    break;
                case 3:
                    arrayList.add(Double.valueOf(readableArray.getDouble(i10)));
                    break;
                case 4:
                    arrayList.add(readableArray.getString(i10));
                    break;
                case 5:
                    ReadableMap map = readableArray.getMap(i10);
                    if (map != null) {
                        obj = L0(map);
                    }
                    arrayList.add(obj);
                    break;
                case 6:
                    ReadableArray array = readableArray.getArray(i10);
                    if (array != null) {
                        obj = K0(array);
                    }
                    arrayList.add(obj);
                    break;
                default:
                    throw new IllegalArgumentException("Unsupported array type at index: " + i10);
            }
        }
        return arrayList;
    }

    public final Map L0(ReadableMap readableMap) {
        Intrinsics.checkNotNullParameter(readableMap, "<this>");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
        while (keySetIterator.hasNextKey()) {
            String nextKey = keySetIterator.nextKey();
            Object obj = null;
            switch (d.f17729b[readableMap.getType(nextKey).ordinal()]) {
                case 1:
                    linkedHashMap.put(nextKey, null);
                    break;
                case 2:
                    linkedHashMap.put(nextKey, Boolean.valueOf(readableMap.getBoolean(nextKey)));
                    break;
                case 3:
                    linkedHashMap.put(nextKey, Double.valueOf(readableMap.getDouble(nextKey)));
                    break;
                case 4:
                    linkedHashMap.put(nextKey, readableMap.getString(nextKey));
                    break;
                case 5:
                    ReadableMap map = readableMap.getMap(nextKey);
                    if (map != null) {
                        obj = L0(map);
                    }
                    linkedHashMap.put(nextKey, obj);
                    break;
                case 6:
                    ReadableArray array = readableMap.getArray(nextKey);
                    if (array != null) {
                        obj = K0(array);
                    }
                    linkedHashMap.put(nextKey, obj);
                    break;
                default:
                    throw new IllegalArgumentException("Unsupported type for key: " + nextKey);
            }
        }
        return linkedHashMap;
    }

    public final void M0(float f10, float f11) {
        RiveFileController controller;
        k kVar = this.f17702e;
        if (kVar != null && (controller = kVar.getController()) != null) {
            controller.pointerEvent(PointerEvents.POINTER_DOWN, 0, f10, f11);
        }
    }

    public final void N0(float f10, float f11) {
        RiveFileController controller;
        k kVar = this.f17702e;
        if (kVar != null && (controller = kVar.getController()) != null) {
            controller.pointerEvent(PointerEvents.POINTER_UP, 0, f10, f11);
        }
    }

    public final void O0() {
        k0();
    }

    public final void W(String animationName, com.rivereactnative.f loopMode) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        Intrinsics.checkNotNullParameter(loopMode, "loopMode");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("animationName", animationName);
        createMap.putString("loopMode", loopMode.toString());
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17721p.toString(), createMap);
    }

    public final void X(String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("animationName", animationName);
        createMap.putBoolean("isStateMachine", z10);
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17719i.toString(), createMap);
    }

    public final void Z(String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("animationName", animationName);
        createMap.putBoolean("isStateMachine", z10);
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17718e.toString(), createMap);
    }

    public final void b0(RiveEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putString(StackTraceHelper.NAME_KEY, event.getName());
        createMap2.putDouble("delay", event.getDelay());
        createMap2.putMap("properties", t(event.getProperties()));
        Intrinsics.checkNotNullExpressionValue(createMap2, "apply(...)");
        if (event instanceof RiveOpenURLEvent) {
            RiveOpenURLEvent riveOpenURLEvent = (RiveOpenURLEvent) event;
            createMap2.putString("url", riveOpenURLEvent.getUrl());
            createMap2.putString("target", riveOpenURLEvent.getTarget());
        }
        createMap.putMap("riveEvent", createMap2);
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17723r.toString(), createMap);
    }

    public final void c0(String stateMachineName, String stateName) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(stateName, "stateName");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("stateMachineName", stateMachineName);
        createMap.putString("stateName", stateName);
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17722q.toString(), createMap);
    }

    public final void d0(String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        ThemedReactContext themedReactContext = this.f17701d;
        Intrinsics.checkNotNull(themedReactContext, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("animationName", animationName);
        createMap.putBoolean("isStateMachine", z10);
        ((RCTEventEmitter) themedReactContext.getJSModule(RCTEventEmitter.class)).receiveEvent(getId(), c.f17720o.toString(), createMap);
    }

    public final void f0() {
        HashSet<StateMachineInstance> playingStateMachines;
        HashSet<LinearAnimationInstance> playingAnimations;
        try {
            k kVar = this.f17702e;
            if (kVar != null && (playingAnimations = kVar.getPlayingAnimations()) != null && (!playingAnimations.isEmpty())) {
                k kVar2 = this.f17702e;
                Intrinsics.checkNotNull(kVar2);
                k kVar3 = this.f17702e;
                Intrinsics.checkNotNull(kVar3);
                RiveAnimationView.pause$default((RiveAnimationView) kVar2, ((LinearAnimationInstance) CollectionsKt.n0(kVar3.getPlayingAnimations())).getName(), false, 2, (Object) null);
                return;
            }
            k kVar4 = this.f17702e;
            if (kVar4 != null && (playingStateMachines = kVar4.getPlayingStateMachines()) != null && (!playingStateMachines.isEmpty())) {
                k kVar5 = this.f17702e;
                Intrinsics.checkNotNull(kVar5);
                k kVar6 = this.f17702e;
                Intrinsics.checkNotNull(kVar6);
                kVar5.pause(((StateMachineInstance) CollectionsKt.n0(kVar6.getPlayingStateMachines())).getName(), true);
                return;
            }
            k kVar7 = this.f17702e;
            if (kVar7 != null) {
                kVar7.pause();
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void g0(String animationName, com.rivereactnative.f rnLoopMode, com.rivereactnative.d rnDirection, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        Intrinsics.checkNotNullParameter(rnLoopMode, "rnLoopMode");
        Intrinsics.checkNotNullParameter(rnDirection, "rnDirection");
        Loop c10 = com.rivereactnative.f.f17631e.c(rnLoopMode);
        Direction b10 = com.rivereactnative.d.f17610e.b(rnDirection);
        if (animationName.length() == 0) {
            k kVar = this.f17702e;
            if (kVar != null) {
                RiveAnimationView.play$default(kVar, c10, b10, false, 4, null);
                return;
            }
            return;
        }
        try {
            k kVar2 = this.f17702e;
            if (kVar2 != null) {
                RiveAnimationView.play$default((RiveAnimationView) kVar2, animationName, c10, b10, z10, false, 16, (Object) null);
                Unit unit = Unit.f32056a;
            }
        } catch (RiveException e10) {
            I(e10);
            Unit unit2 = Unit.f32056a;
        }
    }

    public final void j0(String path, String propertyType) {
        ViewModelProperty stringProperty;
        Job d10;
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        String str = propertyType + ":" + path + ":" + getId();
        m0(str);
        com.rivereactnative.g a10 = com.rivereactnative.g.f17641e.a(propertyType);
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null) {
                switch (d.f17728a[a10.ordinal()]) {
                    case 1:
                        stringProperty = viewModelInstance.getStringProperty(path);
                        break;
                    case 2:
                        stringProperty = viewModelInstance.getBooleanProperty(path);
                        break;
                    case 3:
                        stringProperty = viewModelInstance.getNumberProperty(path);
                        break;
                    case 4:
                        stringProperty = viewModelInstance.getColorProperty(path);
                        break;
                    case 5:
                        stringProperty = viewModelInstance.getEnumProperty(path);
                        break;
                    case 6:
                        stringProperty = viewModelInstance.getTriggerProperty(path);
                        break;
                    case 7:
                        stringProperty = viewModelInstance.getArtboardProperty(path);
                        break;
                    case 8:
                        stringProperty = viewModelInstance.getImageProperty(path);
                        break;
                    default:
                        throw new qr.p();
                }
                d10 = os.i.d(this.F, null, null, new g(a10, stringProperty, this, str, null), 3, null);
                this.H.put(str, new com.rivereactnative.b(viewModelInstance, path, propertyType, d10));
            }
        } catch (RiveException e10) {
            I(e10);
        } catch (Exception e11) {
            I0("Unexpected error during data binding configuration", e11);
        }
    }

    public final void n0() {
        k kVar;
        k kVar2;
        RiveArtboardRenderer artboardRenderer;
        if (this.f17705p != null) {
            if (this.f17704o == -1 && (kVar2 = this.f17702e) != null && (artboardRenderer = kVar2.getArtboardRenderer()) != null) {
                artboardRenderer.reset();
            }
        } else if (this.f17704o != -1 && (kVar = this.f17702e) != null) {
            kVar.reset();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        if (this.B) {
            if (getImageRequestQueue() != null) {
                getImageRequestQueue().c(new o.a() { // from class: com.rivereactnative.u
                    @Override // com.android.volley.o.a
                    public final boolean a(com.android.volley.n nVar) {
                        boolean V;
                        V = y.V(nVar);
                        return V;
                    }
                });
                getImageRequestQueue().i();
            }
            kotlinx.coroutines.i.f(this.F, null, 1, null);
            m mVar = this.E;
            if (mVar != null) {
                mVar.dispose();
            }
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.c();
            }
            l0();
            p();
        }
        super.onDetachedFromWindow();
    }

    public final void r0(String path, String artboardName) {
        File file;
        RiveFileController controller;
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(artboardName, "artboardName");
        try {
            k kVar = this.f17702e;
            if (kVar != null && (controller = kVar.getController()) != null) {
                file = controller.getFile();
            } else {
                file = null;
            }
            if (file == null) {
                Log.e("RiveReactNative", "File is null, cannot get artboard");
                return;
            }
            Artboard artboard = file.artboard(artboardName);
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null) {
                viewModelInstance.getArtboardProperty(path).set(artboard);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x0096 A[Catch: Exception -> 0x0062, RiveException -> 0x0064, IllegalArgumentException -> 0x0066, TryCatch #2 {RiveException -> 0x0064, IllegalArgumentException -> 0x0066, Exception -> 0x0062, blocks: (B:3:0x002d, B:5:0x004f, B:7:0x0055, B:9:0x005b, B:19:0x006e, B:21:0x0096, B:23:0x00a3, B:18:0x0068), top: B:33:0x002d }] */
    /* JADX WARN: Removed duplicated region for block: B:23:0x00a3 A[Catch: Exception -> 0x0062, RiveException -> 0x0064, IllegalArgumentException -> 0x0066, TRY_LEAVE, TryCatch #2 {RiveException -> 0x0064, IllegalArgumentException -> 0x0066, Exception -> 0x0062, blocks: (B:3:0x002d, B:5:0x004f, B:7:0x0055, B:9:0x005b, B:19:0x006e, B:21:0x0096, B:23:0x00a3, B:18:0x0068), top: B:33:0x002d }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void s0(java.lang.String r5, java.lang.String r6) {
        /*
            Method dump skipped, instructions count: 256
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.rivereactnative.y.s0(java.lang.String, java.lang.String):void");
    }

    public final void setAlignment(@NotNull com.rivereactnative.c rnAlignment) {
        Intrinsics.checkNotNullParameter(rnAlignment, "rnAlignment");
        Alignment b10 = com.rivereactnative.c.f17596e.b(rnAlignment);
        this.f17711v = b10;
        k kVar = this.f17702e;
        if (kVar != null) {
            kVar.setAlignment(b10);
        }
    }

    public final void setAnimationName(@NotNull String animationName) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        if (Intrinsics.areEqual(this.f17706q, animationName)) {
            return;
        }
        this.f17706q = animationName;
        this.f17714y = true;
    }

    public final void setArtboardName(@NotNull String artboardName) {
        Intrinsics.checkNotNullParameter(artboardName, "artboardName");
        if (Intrinsics.areEqual(this.f17708s, artboardName)) {
            return;
        }
        this.f17708s = artboardName;
        this.f17714y = true;
    }

    public final void setAutoplay(boolean z10) {
        if (this.f17712w == z10) {
            return;
        }
        this.f17712w = z10;
        this.f17714y = true;
    }

    public final void setDataBinding(ReadableMap readableMap) {
        String string;
        String asString;
        if (readableMap != null && (string = readableMap.getString("type")) != null) {
            Dynamic dynamic = readableMap.getDynamic("value");
            com.rivereactnative.a aVar = null;
            switch (string.hashCode()) {
                case 3373707:
                    if (string.equals(StackTraceHelper.NAME_KEY) && dynamic.getType() == ReadableType.String && (asString = dynamic.asString()) != null) {
                        aVar = new a.d(asString);
                        break;
                    }
                    break;
                case 96634189:
                    if (string.equals("empty")) {
                        aVar = a.b.f17584a;
                        break;
                    }
                    break;
                case 100346066:
                    if (string.equals("index") && dynamic.getType() == ReadableType.Number) {
                        aVar = new a.c(dynamic.asInt());
                        break;
                    }
                    break;
                case 1439142508:
                    if (string.equals("autobind") && dynamic.getType() == ReadableType.Boolean) {
                        aVar = new a.C0208a(dynamic.asBoolean());
                        break;
                    }
                    break;
            }
            if (!Intrinsics.areEqual(aVar, this.G)) {
                this.G = aVar;
                q();
            }
        }
    }

    public final void setFit(@NotNull com.rivereactnative.e rnFit) {
        Intrinsics.checkNotNullParameter(rnFit, "rnFit");
        Fit b10 = com.rivereactnative.e.f17618e.b(rnFit);
        if (this.f17709t != b10) {
            this.f17709t = b10;
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.setFit(b10);
            }
        }
    }

    public final void setIsUserHandlingErrors(boolean z10) {
        this.A = z10;
    }

    public final void setLayoutScaleFactor(Float f10) {
        this.f17710u = f10;
        k kVar = this.f17702e;
        if (kVar != null) {
            kVar.setLayoutScaleFactor(f10);
        }
    }

    public final void setReferencedAssets(ReadableMap readableMap) {
        Map map;
        Map map2;
        Map map3;
        Map map4;
        ReadableMap readableMap2;
        FileAsset fileAsset;
        Map b10;
        ReadableMap readableMap3 = this.f17713x;
        if (readableMap3 != null) {
            map = L0(readableMap3);
        } else {
            map = null;
        }
        if (readableMap != null) {
            map2 = L0(readableMap);
        } else {
            map2 = null;
        }
        if (!Intrinsics.areEqual(map, map2)) {
            ReadableMap readableMap4 = this.f17713x;
            this.f17713x = readableMap;
            if (readableMap4 != null && readableMap != null) {
                List Q = Q(readableMap4);
                List<String> Q2 = Q(readableMap);
                if (!Intrinsics.areEqual(CollectionsKt.l1(Q), CollectionsKt.l1(Q2))) {
                    this.f17714y = true;
                    return;
                }
                for (String str : Q2) {
                    ReadableMap map5 = readableMap4.getMap(str);
                    ReadableMap map6 = readableMap.getMap(str);
                    if (map5 != null) {
                        map3 = L0(map5);
                    } else {
                        map3 = null;
                    }
                    if (map6 != null) {
                        map4 = L0(map6);
                    } else {
                        map4 = null;
                    }
                    if (!Intrinsics.areEqual(map3, map4)) {
                        if (map6 != null) {
                            readableMap2 = map6.getMap("source");
                        } else {
                            readableMap2 = null;
                        }
                        m mVar = this.E;
                        if (mVar != null && (b10 = mVar.b()) != null) {
                            fileAsset = (FileAsset) b10.get(str);
                        } else {
                            fileAsset = null;
                        }
                        if (readableMap2 != null && fileAsset != null) {
                            R(readableMap2, fileAsset);
                        }
                    }
                }
                return;
            }
            this.f17714y = true;
        }
    }

    public final void setResourceName(String str) {
        if (Intrinsics.areEqual(this.f17703i, str)) {
            return;
        }
        this.f17703i = str;
        if (str != null) {
            int identifier = getResources().getIdentifier(str, "raw", this.f17701d.getPackageName());
            this.f17704o = identifier;
            if (identifier == 0) {
                this.f17704o = -1;
            }
        } else {
            this.f17704o = -1;
        }
        this.f17714y = true;
    }

    public final void setStateMachineName(@NotNull String stateMachineName) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        if (Intrinsics.areEqual(this.f17707r, stateMachineName)) {
            return;
        }
        this.f17707r = stateMachineName;
        this.f17714y = true;
    }

    public final void setUrl(String str) {
        if (Intrinsics.areEqual(this.f17705p, str)) {
            return;
        }
        this.f17705p = str;
        this.f17714y = true;
    }

    public final void t0(String path, boolean z10) {
        ViewModelBooleanProperty booleanProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (booleanProperty = viewModelInstance.getBooleanProperty(path)) != null) {
                booleanProperty.setValue(Boolean.valueOf(z10));
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void u0(String stateMachineName, String inputName, boolean z10) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.setBooleanState(stateMachineName, inputName, z10);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void v() {
        this.B = true;
    }

    public final void v0(String inputName, boolean z10, String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.setBooleanStateAtPath(inputName, z10, path);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void w0(String path, int i10, int i11, int i12, int i13) {
        ViewModelColorProperty colorProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            int argb = Color.argb(i13, i10, i11, i12);
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (colorProperty = viewModelInstance.getColorProperty(path)) != null) {
                colorProperty.setValue(Integer.valueOf(argb));
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void x0(String path, String value) {
        ViewModelEnumProperty enumProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(value, "value");
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (enumProperty = viewModelInstance.getEnumProperty(path)) != null) {
                enumProperty.setValue(value);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void y(String stateMachineName, String inputName) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.fireState(stateMachineName, inputName);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void y0(String path, String imageUrl) {
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(imageUrl, "imageUrl");
        Log.d("RiveReactNative", "setImagePropertyValue called: path=" + path + ", imageUrl=" + imageUrl);
        try {
            w(imageUrl, path, 1, 3);
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void z(String inputName, String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            k kVar = this.f17702e;
            if (kVar != null) {
                kVar.fireStateAtPath(inputName, path);
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }

    public final void z0(String path, float f10) {
        ViewModelNumberProperty numberProperty;
        Intrinsics.checkNotNullParameter(path, "path");
        try {
            ViewModelInstance viewModelInstance = getViewModelInstance();
            if (viewModelInstance != null && (numberProperty = viewModelInstance.getNumberProperty(path)) != null) {
                numberProperty.setValue(Float.valueOf(f10));
            }
        } catch (RiveException e10) {
            I(e10);
        }
    }
}
