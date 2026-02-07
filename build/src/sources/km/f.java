package km;

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
    public static final a f31794f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0449a f31795g = a.EnumC0449a.f31804e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0449a f31796h = a.EnumC0449a.f31805i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0449a f31797i = a.EnumC0449a.f31806o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0449a f31798j = a.EnumC0449a.f31807p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0449a f31799a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31800b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31801c;

    /* renamed from: d  reason: collision with root package name */
    private final int f31802d;

    /* renamed from: e  reason: collision with root package name */
    private final int f31803e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: km.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0449a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0449a f31804e = new EnumC0449a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0449a f31805i = new EnumC0449a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0449a f31806o = new EnumC0449a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0449a f31807p = new EnumC0449a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0449a[] f31808q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f31809r;

            /* renamed from: d  reason: collision with root package name */
            private final String f31810d;

            static {
                EnumC0449a[] a10 = a();
                f31808q = a10;
                f31809r = xr.a.a(a10);
            }

            private EnumC0449a(String str, int i10, String str2) {
                this.f31810d = str2;
            }

            private static final /* synthetic */ EnumC0449a[] a() {
                return new EnumC0449a[]{f31804e, f31805i, f31806o, f31807p};
            }

            public static EnumC0449a valueOf(String str) {
                return (EnumC0449a) Enum.valueOf(EnumC0449a.class, str);
            }

            public static EnumC0449a[] values() {
                return (EnumC0449a[]) f31808q.clone();
            }

            public final String d() {
                return this.f31810d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0449a a() {
            return f.f31797i;
        }

        public final EnumC0449a b() {
            return f.f31798j;
        }

        public final EnumC0449a c() {
            return f.f31795g;
        }

        public final EnumC0449a d() {
            return f.f31796h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0449a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f31799a = event;
        this.f31800b = d10;
        this.f31801c = d11;
        this.f31802d = i12;
        this.f31803e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f31801c);
        createMap.putDouble("height", this.f31800b);
        createMap.putInt("duration", this.f31802d);
        createMap.putInt("target", this.f31803e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f31799a.d();
    }
}
