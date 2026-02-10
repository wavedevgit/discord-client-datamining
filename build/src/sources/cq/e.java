package cq;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements cq.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21001d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f21002a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f21003b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21004c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public e(b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f21002a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f21003b = arrayList == null ? new ArrayList() : arrayList;
        this.f21004c = true;
    }

    @Override // cq.a
    public boolean a() {
        return this.f21004c;
    }

    @Override // cq.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f21003b.add(stepData);
        this.f21002a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f21003b);
    }

    public ArrayList c() {
        return new ArrayList(this.f21003b);
    }
}
