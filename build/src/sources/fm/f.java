package fm;

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
    public static final a f24064f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0317a f24065g = a.EnumC0317a.f24074e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0317a f24066h = a.EnumC0317a.f24075i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0317a f24067i = a.EnumC0317a.f24076o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0317a f24068j = a.EnumC0317a.f24077p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0317a f24069a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24070b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24071c;

    /* renamed from: d  reason: collision with root package name */
    private final int f24072d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24073e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: fm.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0317a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0317a f24074e = new EnumC0317a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0317a f24075i = new EnumC0317a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0317a f24076o = new EnumC0317a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0317a f24077p = new EnumC0317a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0317a[] f24078q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f24079r;

            /* renamed from: d  reason: collision with root package name */
            private final String f24080d;

            static {
                EnumC0317a[] a10 = a();
                f24078q = a10;
                f24079r = sr.a.a(a10);
            }

            private EnumC0317a(String str, int i10, String str2) {
                this.f24080d = str2;
            }

            private static final /* synthetic */ EnumC0317a[] a() {
                return new EnumC0317a[]{f24074e, f24075i, f24076o, f24077p};
            }

            public static EnumC0317a valueOf(String str) {
                return (EnumC0317a) Enum.valueOf(EnumC0317a.class, str);
            }

            public static EnumC0317a[] values() {
                return (EnumC0317a[]) f24078q.clone();
            }

            public final String d() {
                return this.f24080d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0317a a() {
            return f.f24067i;
        }

        public final EnumC0317a b() {
            return f.f24068j;
        }

        public final EnumC0317a c() {
            return f.f24065g;
        }

        public final EnumC0317a d() {
            return f.f24066h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0317a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f24069a = event;
        this.f24070b = d10;
        this.f24071c = d11;
        this.f24072d = i12;
        this.f24073e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f24071c);
        createMap.putDouble("height", this.f24070b);
        createMap.putInt("duration", this.f24072d);
        createMap.putInt("target", this.f24073e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f24069a.d();
    }
}
