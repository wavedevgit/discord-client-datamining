package com.th3rdwave.safeareacontext;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Event {

    /* renamed from: c  reason: collision with root package name */
    public static final a f18438c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final com.th3rdwave.safeareacontext.a f18439a;

    /* renamed from: b  reason: collision with root package name */
    private final c f18440b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(int i10, int i11, com.th3rdwave.safeareacontext.a mInsets, c mFrame) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(mInsets, "mInsets");
        Intrinsics.checkNotNullParameter(mFrame, "mFrame");
        this.f18439a = mInsets;
        this.f18440b = mFrame;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putMap("insets", q.b(this.f18439a));
        createMap.putMap("frame", q.d(this.f18440b));
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return "topInsetsChange";
    }
}
