package em;

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
    public static final a f22941f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0297a f22942g = a.EnumC0297a.f22951e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0297a f22943h = a.EnumC0297a.f22952i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0297a f22944i = a.EnumC0297a.f22953o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0297a f22945j = a.EnumC0297a.f22954p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0297a f22946a;

    /* renamed from: b  reason: collision with root package name */
    private final double f22947b;

    /* renamed from: c  reason: collision with root package name */
    private final double f22948c;

    /* renamed from: d  reason: collision with root package name */
    private final int f22949d;

    /* renamed from: e  reason: collision with root package name */
    private final int f22950e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: em.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0297a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0297a f22951e = new EnumC0297a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0297a f22952i = new EnumC0297a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0297a f22953o = new EnumC0297a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0297a f22954p = new EnumC0297a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0297a[] f22955q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f22956r;

            /* renamed from: d  reason: collision with root package name */
            private final String f22957d;

            static {
                EnumC0297a[] a10 = a();
                f22955q = a10;
                f22956r = pr.a.a(a10);
            }

            private EnumC0297a(String str, int i10, String str2) {
                this.f22957d = str2;
            }

            private static final /* synthetic */ EnumC0297a[] a() {
                return new EnumC0297a[]{f22951e, f22952i, f22953o, f22954p};
            }

            public static EnumC0297a valueOf(String str) {
                return (EnumC0297a) Enum.valueOf(EnumC0297a.class, str);
            }

            public static EnumC0297a[] values() {
                return (EnumC0297a[]) f22955q.clone();
            }

            public final String d() {
                return this.f22957d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0297a a() {
            return f.f22944i;
        }

        public final EnumC0297a b() {
            return f.f22945j;
        }

        public final EnumC0297a c() {
            return f.f22942g;
        }

        public final EnumC0297a d() {
            return f.f22943h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0297a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f22946a = event;
        this.f22947b = d10;
        this.f22948c = d11;
        this.f22949d = i12;
        this.f22950e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f22948c);
        createMap.putDouble("height", this.f22947b);
        createMap.putInt("duration", this.f22949d);
        createMap.putInt("target", this.f22950e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f22946a.d();
    }
}
