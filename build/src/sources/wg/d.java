package wg;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends IllegalStateException {
    private d(String str, Throwable th2) {
        super(str, th2);
    }

    public static IllegalStateException a(Task task) {
        String str;
        if (!task.o()) {
            return new IllegalStateException("DuplicateTaskCompletionException can only be created from completed Task.");
        }
        Exception k10 = task.k();
        if (k10 != null) {
            str = "failure";
        } else if (task.p()) {
            str = "result ".concat(String.valueOf(task.l()));
        } else if (task.n()) {
            str = "cancellation";
        } else {
            str = "unknown issue";
        }
        return new d("Complete with: ".concat(str), k10);
    }
}
