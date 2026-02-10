package nm;

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
    public static final a f37984f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0535a f37985g = a.EnumC0535a.f37994e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0535a f37986h = a.EnumC0535a.f37995i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0535a f37987i = a.EnumC0535a.f37996o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0535a f37988j = a.EnumC0535a.f37997p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0535a f37989a;

    /* renamed from: b  reason: collision with root package name */
    private final double f37990b;

    /* renamed from: c  reason: collision with root package name */
    private final double f37991c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37992d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37993e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: nm.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0535a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0535a f37994e = new EnumC0535a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0535a f37995i = new EnumC0535a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0535a f37996o = new EnumC0535a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0535a f37997p = new EnumC0535a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0535a[] f37998q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f37999r;

            /* renamed from: d  reason: collision with root package name */
            private final String f38000d;

            static {
                EnumC0535a[] a10 = a();
                f37998q = a10;
                f37999r = hs.a.a(a10);
            }

            private EnumC0535a(String str, int i10, String str2) {
                this.f38000d = str2;
            }

            private static final /* synthetic */ EnumC0535a[] a() {
                return new EnumC0535a[]{f37994e, f37995i, f37996o, f37997p};
            }

            public static EnumC0535a valueOf(String str) {
                return (EnumC0535a) Enum.valueOf(EnumC0535a.class, str);
            }

            public static EnumC0535a[] values() {
                return (EnumC0535a[]) f37998q.clone();
            }

            public final String d() {
                return this.f38000d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0535a a() {
            return f.f37987i;
        }

        public final EnumC0535a b() {
            return f.f37988j;
        }

        public final EnumC0535a c() {
            return f.f37985g;
        }

        public final EnumC0535a d() {
            return f.f37986h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0535a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f37989a = event;
        this.f37990b = d10;
        this.f37991c = d11;
        this.f37992d = i12;
        this.f37993e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f37991c);
        createMap.putDouble("height", this.f37990b);
        createMap.putInt("duration", this.f37992d);
        createMap.putInt("target", this.f37993e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f37989a.d();
    }
}
