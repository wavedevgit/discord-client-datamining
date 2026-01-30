package kp;

import androidx.lifecycle.b0;
import java.util.ArrayList;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements kp.a {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36437d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final b0 f36438a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36439b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f36440c;

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
        this.f36438a = savedStateHandle;
        ArrayList arrayList = (ArrayList) savedStateHandle.b("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData");
        this.f36439b = arrayList == null ? new ArrayList() : arrayList;
        this.f36440c = true;
    }

    @Override // kp.a
    public boolean a() {
        return this.f36440c;
    }

    @Override // kp.a
    public void b(f stepData) {
        Intrinsics.checkNotNullParameter(stepData, "stepData");
        this.f36439b.add(stepData);
        this.f36438a.h("com.withpersona.sdk2.inquiry.shared.data_collection.RealDataCollector.collectedData", this.f36439b);
    }

    public ArrayList c() {
        return new ArrayList(this.f36439b);
    }
}
