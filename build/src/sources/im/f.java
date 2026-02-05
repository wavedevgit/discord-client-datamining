package im;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends Event {

    /* renamed from: f  reason: collision with root package name */
    public static final a f27456f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0384a f27457g = a.EnumC0384a.f27466e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0384a f27458h = a.EnumC0384a.f27467i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0384a f27459i = a.EnumC0384a.f27468o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0384a f27460j = a.EnumC0384a.f27469p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0384a f27461a;

    /* renamed from: b  reason: collision with root package name */
    private final double f27462b;

    /* renamed from: c  reason: collision with root package name */
    private final double f27463c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27464d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27465e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: im.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0384a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0384a f27466e = new EnumC0384a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0384a f27467i = new EnumC0384a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0384a f27468o = new EnumC0384a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0384a f27469p = new EnumC0384a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0384a[] f27470q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f27471r;

            /* renamed from: d  reason: collision with root package name */
            private final String f27472d;

            static {
                EnumC0384a[] a10 = a();
                f27470q = a10;
                f27471r = vr.a.a(a10);
            }

            private EnumC0384a(String str, int i10, String str2) {
                this.f27472d = str2;
            }

            private static final /* synthetic */ EnumC0384a[] a() {
                return new EnumC0384a[]{f27466e, f27467i, f27468o, f27469p};
            }

            public static EnumC0384a valueOf(String str) {
                return (EnumC0384a) Enum.valueOf(EnumC0384a.class, str);
            }

            public static EnumC0384a[] values() {
                return (EnumC0384a[]) f27470q.clone();
            }

            public final String d() {
                return this.f27472d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0384a a() {
            return f.f27459i;
        }

        public final EnumC0384a b() {
            return f.f27460j;
        }

        public final EnumC0384a c() {
            return f.f27457g;
        }

        public final EnumC0384a d() {
            return f.f27458h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0384a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f27461a = event;
        this.f27462b = d10;
        this.f27463c = d11;
        this.f27464d = i12;
        this.f27465e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f27463c);
        createMap.putDouble("height", this.f27462b);
        createMap.putInt("duration", this.f27464d);
        createMap.putInt("target", this.f27465e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f27461a.d();
    }
}
