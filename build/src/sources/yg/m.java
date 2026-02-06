package yg;

import com.google.android.gms.tasks.Task;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m {
    public static Object a(Task task) {
        gf.q.j();
        gf.q.h();
        gf.q.m(task, "Task must not be null");
        if (task.o()) {
            return i(task);
        }
        p pVar = new p(null);
        j(task, pVar);
        pVar.b();
        return i(task);
    }

    public static Object b(Task task, long j10, TimeUnit timeUnit) {
        gf.q.j();
        gf.q.h();
        gf.q.m(task, "Task must not be null");
        gf.q.m(timeUnit, "TimeUnit must not be null");
        if (task.o()) {
            return i(task);
        }
        p pVar = new p(null);
        j(task, pVar);
        if (pVar.c(j10, timeUnit)) {
            return i(task);
        }
        throw new TimeoutException("Timed out waiting for Task");
    }

    public static Task c(Executor executor, Callable callable) {
        gf.q.m(executor, "Executor must not be null");
        gf.q.m(callable, "Callback must not be null");
        m0 m0Var = new m0();
        executor.execute(new n0(m0Var, callable));
        return m0Var;
    }

    public static Task d() {
        m0 m0Var = new m0();
        m0Var.u();
        return m0Var;
    }

    public static Task e(Exception exc) {
        m0 m0Var = new m0();
        m0Var.s(exc);
        return m0Var;
    }

    public static Task f(Object obj) {
        m0 m0Var = new m0();
        m0Var.t(obj);
        return m0Var;
    }

    public static Task g(Collection collection) {
        if (collection != null && !collection.isEmpty()) {
            Iterator it = collection.iterator();
            while (it.hasNext()) {
                if (((Task) it.next()) == null) {
                    throw new NullPointerException("null tasks are not accepted");
                }
            }
            m0 m0Var = new m0();
            r rVar = new r(collection.size(), m0Var);
            Iterator it2 = collection.iterator();
            while (it2.hasNext()) {
                j((Task) it2.next(), rVar);
            }
            return m0Var;
        }
        return f(null);
    }

    public static Task h(Task... taskArr) {
        if (taskArr != null && taskArr.length != 0) {
            return g(Arrays.asList(taskArr));
        }
        return f(null);
    }

    private static Object i(Task task) {
        if (task.p()) {
            return task.l();
        }
        if (task.n()) {
            throw new CancellationException("Task is already canceled");
        }
        throw new ExecutionException(task.k());
    }

    private static void j(Task task, q qVar) {
        Executor executor = l.f55337b;
        task.f(executor, qVar);
        task.d(executor, qVar);
        task.a(executor, qVar);
    }
}
