package com.google.firebase.messaging;

import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.util.Map;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class q0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f16123a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f16124b = new u0.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface a {
        Task start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(Executor executor) {
        this.f16123a = executor;
    }

    public static /* synthetic */ Task a(q0 q0Var, String str, Task task) {
        synchronized (q0Var) {
            q0Var.f16124b.remove(str);
        }
        return task;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized Task b(final String str, a aVar) {
        Task task = (Task) this.f16124b.get(str);
        if (task != null) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Joining ongoing request for: " + str);
            }
            return task;
        }
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            Log.d("FirebaseMessaging", "Making new request for: " + str);
        }
        Task i10 = aVar.start().i(this.f16123a, new wg.c() { // from class: com.google.firebase.messaging.p0
            @Override // wg.c
            public final Object a(Task task2) {
                return q0.a(q0.this, str, task2);
            }
        });
        this.f16124b.put(str, i10);
        return i10;
    }
}
