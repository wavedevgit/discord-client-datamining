package ef;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BasePendingResult;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends BasePendingResult {

    /* renamed from: a  reason: collision with root package name */
    private final k f21577a;

    public o(e eVar, k kVar) {
        super(eVar);
        this.f21577a = kVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.common.api.internal.BasePendingResult
    public final k a(Status status) {
        return this.f21577a;
    }
}
