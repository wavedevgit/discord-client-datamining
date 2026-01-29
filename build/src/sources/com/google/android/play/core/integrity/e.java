package com.google.android.play.core.integrity;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e implements IntegrityManager {

    /* renamed from: a  reason: collision with root package name */
    private final k f17167a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(k kVar) {
        this.f17167a = kVar;
    }

    @Override // com.google.android.play.core.integrity.IntegrityManager
    public final Task requestIntegrityToken(IntegrityTokenRequest integrityTokenRequest) {
        return this.f17167a.b(integrityTokenRequest);
    }
}
