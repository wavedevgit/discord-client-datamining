package lm;

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
    public static final a f36014f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0511a f36015g = a.EnumC0511a.f36024e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0511a f36016h = a.EnumC0511a.f36025i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0511a f36017i = a.EnumC0511a.f36026o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0511a f36018j = a.EnumC0511a.f36027p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0511a f36019a;

    /* renamed from: b  reason: collision with root package name */
    private final double f36020b;

    /* renamed from: c  reason: collision with root package name */
    private final double f36021c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36022d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36023e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: lm.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0511a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0511a f36024e = new EnumC0511a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0511a f36025i = new EnumC0511a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0511a f36026o = new EnumC0511a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0511a f36027p = new EnumC0511a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0511a[] f36028q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f36029r;

            /* renamed from: d  reason: collision with root package name */
            private final String f36030d;

            static {
                EnumC0511a[] a10 = a();
                f36028q = a10;
                f36029r = yr.a.a(a10);
            }

            private EnumC0511a(String str, int i10, String str2) {
                this.f36030d = str2;
            }

            private static final /* synthetic */ EnumC0511a[] a() {
                return new EnumC0511a[]{f36024e, f36025i, f36026o, f36027p};
            }

            public static EnumC0511a valueOf(String str) {
                return (EnumC0511a) Enum.valueOf(EnumC0511a.class, str);
            }

            public static EnumC0511a[] values() {
                return (EnumC0511a[]) f36028q.clone();
            }

            public final String d() {
                return this.f36030d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0511a a() {
            return f.f36017i;
        }

        public final EnumC0511a b() {
            return f.f36018j;
        }

        public final EnumC0511a c() {
            return f.f36015g;
        }

        public final EnumC0511a d() {
            return f.f36016h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0511a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f36019a = event;
        this.f36020b = d10;
        this.f36021c = d11;
        this.f36022d = i12;
        this.f36023e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f36021c);
        createMap.putDouble("height", this.f36020b);
        createMap.putInt("duration", this.f36022d);
        createMap.putInt("target", this.f36023e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f36019a.d();
    }
}
