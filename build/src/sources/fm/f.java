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
    public static final a f24472f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0321a f24473g = a.EnumC0321a.f24482e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0321a f24474h = a.EnumC0321a.f24483i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0321a f24475i = a.EnumC0321a.f24484o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0321a f24476j = a.EnumC0321a.f24485p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0321a f24477a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24478b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24479c;

    /* renamed from: d  reason: collision with root package name */
    private final int f24480d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24481e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: fm.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0321a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0321a f24482e = new EnumC0321a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0321a f24483i = new EnumC0321a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0321a f24484o = new EnumC0321a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0321a f24485p = new EnumC0321a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0321a[] f24486q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f24487r;

            /* renamed from: d  reason: collision with root package name */
            private final String f24488d;

            static {
                EnumC0321a[] a10 = a();
                f24486q = a10;
                f24487r = qr.a.a(a10);
            }

            private EnumC0321a(String str, int i10, String str2) {
                this.f24488d = str2;
            }

            private static final /* synthetic */ EnumC0321a[] a() {
                return new EnumC0321a[]{f24482e, f24483i, f24484o, f24485p};
            }

            public static EnumC0321a valueOf(String str) {
                return (EnumC0321a) Enum.valueOf(EnumC0321a.class, str);
            }

            public static EnumC0321a[] values() {
                return (EnumC0321a[]) f24486q.clone();
            }

            public final String d() {
                return this.f24488d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0321a a() {
            return f.f24475i;
        }

        public final EnumC0321a b() {
            return f.f24476j;
        }

        public final EnumC0321a c() {
            return f.f24473g;
        }

        public final EnumC0321a d() {
            return f.f24474h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0321a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f24477a = event;
        this.f24478b = d10;
        this.f24479c = d11;
        this.f24480d = i12;
        this.f24481e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f24479c);
        createMap.putDouble("height", this.f24478b);
        createMap.putInt("duration", this.f24480d);
        createMap.putInt("target", this.f24481e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f24477a.d();
    }
}
