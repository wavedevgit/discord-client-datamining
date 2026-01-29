package app.rive.core;

import android.opengl.EGL14;
import android.opengl.EGLConfig;
import android.opengl.EGLContext;
import android.opengl.EGLDisplay;
import android.opengl.EGLSurface;
import android.view.Surface;
import androidx.annotation.Keep;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.z;
import app.rive.RiveLog;
import app.rive.ViewModelInstanceSource;
import app.rive.ViewModelSource;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.ViewModel;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import gs.c1;
import gs.g;
import gs.m0;
import ir.p;
import is.a;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import js.a0;
import js.c0;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.InlineMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.MutableSharedFlow;
import or.b;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000²\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u0012\n\u0002\b\n\n\u0002\u0010\u000e\n\u0002\b\"\n\u0002\u0010\u0007\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u001e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b'\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 é\u00022\u00020\u0001:\u0004é\u0002ê\u0002B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u0007\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0006\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u0007\u0010\bJ\u0018\u0010\u000b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u000b\u0010\fJ\u0018\u0010\u000e\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u000e\u0010\u000fJ \u0010\u0013\u001a\u00020\u00042\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u0010H\u0082 ¢\u0006\u0004\b\u0013\u0010\u0014J(\u0010\u0018\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u0017\u001a\u00020\u0016H\u0082 ¢\u0006\u0004\b\u0018\u0010\u0019J(\u0010\u001b\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u001b\u0010\u001cJ(\u0010\u001d\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u001d\u0010\u001cJ(\u0010\u001f\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u001f\u0010\u001cJ(\u0010 \u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b \u0010\u001cJ0\u0010#\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020!H\u0082 ¢\u0006\u0004\b#\u0010$J0\u0010%\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020!H\u0082 ¢\u0006\u0004\b%\u0010$J(\u0010&\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b&\u0010\u001cJ(\u0010'\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b'\u0010(J0\u0010*\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!H\u0082 ¢\u0006\u0004\b*\u0010+J(\u0010,\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b,\u0010\u001cJ(\u0010-\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b-\u0010(J0\u0010.\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!H\u0082 ¢\u0006\u0004\b.\u0010+J(\u00100\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b0\u0010\u001cJ(\u00102\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u00101\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b2\u0010\u001cJ0\u00103\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020!H\u0082 ¢\u0006\u0004\b3\u0010+J0\u00104\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b4\u00105J0\u00106\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020!H\u0082 ¢\u0006\u0004\b6\u0010+J0\u00107\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b7\u00105J8\u00109\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\"\u001a\u00020!2\u0006\u00108\u001a\u00020!H\u0082 ¢\u0006\u0004\b9\u0010:J8\u0010;\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u00042\u0006\u00108\u001a\u00020!H\u0082 ¢\u0006\u0004\b;\u0010<J0\u0010?\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010>\u001a\u00020!H\u0082 ¢\u0006\u0004\b?\u0010+J(\u0010@\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b@\u0010\u001cJ0\u0010A\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\bA\u0010BJ0\u0010F\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020DH\u0082 ¢\u0006\u0004\bF\u0010GJ0\u0010H\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bH\u0010$J0\u0010I\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020!H\u0082 ¢\u0006\u0004\bI\u0010JJ0\u0010K\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bK\u0010$J0\u0010M\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020LH\u0082 ¢\u0006\u0004\bM\u0010NJ0\u0010O\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bO\u0010$J0\u0010P\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020!H\u0082 ¢\u0006\u0004\bP\u0010JJ0\u0010Q\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bQ\u0010$J0\u0010R\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020\u0010H\u0082 ¢\u0006\u0004\bR\u0010SJ0\u0010T\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bT\u0010$J(\u0010U\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!H\u0082 ¢\u0006\u0004\bU\u0010VJ0\u0010X\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u00042\u0006\u0010C\u001a\u00020!2\u0006\u0010W\u001a\u00020\u0010H\u0082 ¢\u0006\u0004\bX\u0010SJ(\u0010Y\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u0017\u001a\u00020\u0016H\u0082 ¢\u0006\u0004\bY\u0010\u0019J \u0010[\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010Z\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b[\u0010\\J(\u0010]\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!2\u0006\u0010Z\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b]\u0010^J \u0010_\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!H\u0082 ¢\u0006\u0004\b_\u0010`J(\u0010a\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u0017\u001a\u00020\u0016H\u0082 ¢\u0006\u0004\ba\u0010\u0019J \u0010c\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010b\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\bc\u0010\\J(\u0010d\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!2\u0006\u0010b\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\bd\u0010^J \u0010e\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!H\u0082 ¢\u0006\u0004\be\u0010`J(\u0010f\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u0017\u001a\u00020\u0016H\u0082 ¢\u0006\u0004\bf\u0010\u0019J \u0010h\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010g\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\bh\u0010\\J(\u0010i\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!2\u0006\u0010g\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\bi\u0010^J \u0010j\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010)\u001a\u00020!H\u0082 ¢\u0006\u0004\bj\u0010`JX\u0010t\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0006\u0010r\u001a\u00020D2\u0006\u0010s\u001a\u00020DH\u0082 ¢\u0006\u0004\bt\u0010uJX\u0010v\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0006\u0010r\u001a\u00020D2\u0006\u0010s\u001a\u00020DH\u0082 ¢\u0006\u0004\bv\u0010uJX\u0010w\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0006\u0010r\u001a\u00020D2\u0006\u0010s\u001a\u00020DH\u0082 ¢\u0006\u0004\bw\u0010uJX\u0010x\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0006\u0010r\u001a\u00020D2\u0006\u0010s\u001a\u00020DH\u0082 ¢\u0006\u0004\bx\u0010uJ\u0018\u0010y\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\by\u0010zJ\u0018\u0010{\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b{\u0010\fJ}\u0010\u0082\u0001\u001a\u00020\n2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010|\u001a\u00020\u00042\u0006\u0010}\u001a\u00020\u00042\u0006\u0010~\u001a\u00020\u00042\u0006\u0010\u007f\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u00042\u0006\u0010/\u001a\u00020\u00042\u0007\u0010\u0080\u0001\u001a\u00020\u00042\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u00102\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0007\u0010\u0081\u0001\u001a\u00020\u0010H\u0082 ¢\u0006\u0006\b\u0082\u0001\u0010\u0083\u0001J\u001a\u0010\u0085\u0001\u001a\u00020\n2\u0007\u0010\u0084\u0001\u001a\u00020\u0004H\u0002¢\u0006\u0005\b\u0085\u0001\u0010\fJ\u0013\u0010\u0087\u0001\u001a\u00030\u0086\u0001H\u0002¢\u0006\u0006\b\u0087\u0001\u0010\u0088\u0001JU\u0010\u0091\u0001\u001a\u00020\n\"\u0005\b\u0000\u0010\u0089\u00012\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\u0006\u0010E\u001a\u00028\u00002\u0015\u0010\u008e\u0001\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00028\u00000\u008d\u00010\u008c\u0001H\u0002ø\u0001\u0000¢\u0006\u0006\b\u008f\u0001\u0010\u0090\u0001J4\u0010\u0094\u0001\u001a\u00028\u0000\"\u0007\b\u0000\u0010\u0089\u0001\u0018\u00012\u0016\b\u0004\u0010\u0093\u0001\u001a\u000f\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\n0\u0092\u0001H\u0082H¢\u0006\u0006\b\u0094\u0001\u0010\u0095\u0001J\u0019\u0010\u0097\u0001\u001a\u00020\n2\u0007\u0010\u0096\u0001\u001a\u00020!¢\u0006\u0006\b\u0097\u0001\u0010\u0098\u0001J$\u0010\u009a\u0001\u001a\u00020\n2\u0007\u0010\u0096\u0001\u001a\u00020!2\t\b\u0002\u0010\u0099\u0001\u001a\u00020!¢\u0006\u0006\b\u009a\u0001\u0010\u009b\u0001J$\u0010\u009f\u0001\u001a\u00030\u009e\u00012\b\u0010\u009d\u0001\u001a\u00030\u009c\u00012\u0007\u0010\u0096\u0001\u001a\u00020!¢\u0006\u0006\b\u009f\u0001\u0010 \u0001J\u001b\u0010¤\u0001\u001a\u00030£\u00012\b\u0010¢\u0001\u001a\u00030¡\u0001¢\u0006\u0006\b¤\u0001\u0010¥\u0001J\"\u0010§\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b§\u0001\u0010`J\"\u0010¨\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b¨\u0001\u0010`J\"\u0010©\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b©\u0001\u0010`J\"\u0010ª\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\bª\u0001\u0010`J\"\u0010®\u0001\u001a\u00030«\u00012\u0006\u0010\u0017\u001a\u00020\u0016H\u0086@ø\u0001\u0001ø\u0001\u0000¢\u0006\u0006\b¬\u0001\u0010\u00ad\u0001J\"\u0010¯\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010\u001a\u001a\u00030«\u0001H\u0001¢\u0006\u0005\b¯\u0001\u0010\\J\u001b\u0010±\u0001\u001a\u00020\n2\u0007\u0010\u001a\u001a\u00030«\u0001ø\u0001\u0000¢\u0006\u0005\b°\u0001\u0010\fJ&\u0010µ\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u00012\u0007\u0010\u001a\u001a\u00030«\u0001H\u0086@ø\u0001\u0000¢\u0006\u0006\b³\u0001\u0010´\u0001J*\u0010·\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000e\u0010¶\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u0001H\u0001¢\u0006\u0006\b·\u0001\u0010¸\u0001J&\u0010»\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u00012\u0007\u0010\u001e\u001a\u00030¹\u0001H\u0086@ø\u0001\u0000¢\u0006\u0006\bº\u0001\u0010´\u0001J*\u0010¼\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000e\u0010¶\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u0001H\u0001¢\u0006\u0006\b¼\u0001\u0010¸\u0001J&\u0010¾\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u00012\u0007\u0010\u001a\u001a\u00030«\u0001H\u0086@ø\u0001\u0000¢\u0006\u0006\b½\u0001\u0010´\u0001J*\u0010¿\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000e\u0010¶\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u0001H\u0001¢\u0006\u0006\b¿\u0001\u0010¸\u0001J.\u0010Â\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u00012\u0007\u0010\u001a\u001a\u00030«\u00012\u0006\u0010\"\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bÀ\u0001\u0010Á\u0001J*\u0010Ã\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000e\u0010¶\u0001\u001a\t\u0012\u0004\u0012\u00020!0²\u0001H\u0001¢\u0006\u0006\bÃ\u0001\u0010¸\u0001J/\u0010Æ\u0001\u001a\n\u0012\u0005\u0012\u00030Ä\u00010²\u00012\u0007\u0010\u001a\u001a\u00030«\u00012\u0006\u0010\"\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bÅ\u0001\u0010Á\u0001J+\u0010È\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000f\u0010Ç\u0001\u001a\n\u0012\u0005\u0012\u00030Ä\u00010²\u0001H\u0001¢\u0006\u0006\bÈ\u0001\u0010¸\u0001J'\u0010Ë\u0001\u001a\n\u0012\u0005\u0012\u00030É\u00010²\u00012\u0007\u0010\u001a\u001a\u00030«\u0001H\u0086@ø\u0001\u0000¢\u0006\u0006\bÊ\u0001\u0010´\u0001J+\u0010Í\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u000f\u0010Ì\u0001\u001a\n\u0012\u0005\u0012\u00030É\u00010²\u0001H\u0001¢\u0006\u0006\bÍ\u0001\u0010¸\u0001J\u001c\u0010Ï\u0001\u001a\u00030¹\u00012\u0007\u0010\u001a\u001a\u00030«\u0001ø\u0001\u0000¢\u0006\u0005\bÎ\u0001\u0010zJ%\u0010Ò\u0001\u001a\u00030¹\u00012\u0007\u0010\u001a\u001a\u00030«\u00012\u0006\u0010)\u001a\u00020!ø\u0001\u0000¢\u0006\u0006\bÐ\u0001\u0010Ñ\u0001J\u001b\u0010Ô\u0001\u001a\u00020\n2\u0007\u0010\u001e\u001a\u00030¹\u0001ø\u0001\u0000¢\u0006\u0005\bÓ\u0001\u0010\fJ\u001c\u0010×\u0001\u001a\u00030Õ\u00012\u0007\u0010\u001e\u001a\u00030¹\u0001ø\u0001\u0000¢\u0006\u0005\bÖ\u0001\u0010zJ%\u0010Ù\u0001\u001a\u00030Õ\u00012\u0007\u0010\u001e\u001a\u00030¹\u00012\u0006\u0010)\u001a\u00020!ø\u0001\u0000¢\u0006\u0006\bØ\u0001\u0010Ñ\u0001J\u001b\u0010Û\u0001\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u0001ø\u0001\u0000¢\u0006\u0005\bÚ\u0001\u0010\fJ#\u0010Ý\u0001\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u00101\u001a\u00020\u0004ø\u0001\u0000¢\u0006\u0005\bÜ\u0001\u0010\\J\u001a\u0010Þ\u0001\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u0001H\u0001¢\u0006\u0005\bÞ\u0001\u0010\fJ'\u0010â\u0001\u001a\u00030\u008a\u00012\u0007\u0010\u001a\u001a\u00030«\u00012\b\u0010\u0096\u0001\u001a\u00030ß\u0001ø\u0001\u0000¢\u0006\u0006\bà\u0001\u0010á\u0001J\u001b\u0010ä\u0001\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u0001ø\u0001\u0000¢\u0006\u0005\bã\u0001\u0010\fJ$\u0010æ\u0001\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0007\u0010=\u001a\u00030\u008a\u0001ø\u0001\u0000¢\u0006\u0005\bå\u0001\u0010\\J,\u0010é\u0001\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020Dø\u0001\u0000¢\u0006\u0006\bç\u0001\u0010è\u0001J'\u0010ë\u0001\u001a\u00020D2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bê\u0001\u0010Á\u0001J3\u0010ì\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\u0006\u0010E\u001a\u00020DH\u0001¢\u0006\u0005\bì\u0001\u0010GJ,\u0010ï\u0001\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020!ø\u0001\u0000¢\u0006\u0006\bí\u0001\u0010î\u0001J'\u0010ñ\u0001\u001a\u00020!2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bð\u0001\u0010Á\u0001J3\u0010ò\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\u0006\u0010E\u001a\u00020!H\u0001¢\u0006\u0005\bò\u0001\u0010JJ,\u0010õ\u0001\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020Lø\u0001\u0000¢\u0006\u0006\bó\u0001\u0010ô\u0001J'\u0010÷\u0001\u001a\u00020L2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bö\u0001\u0010Á\u0001J3\u0010ø\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\u0006\u0010E\u001a\u00020LH\u0001¢\u0006\u0005\bø\u0001\u0010NJ,\u0010ú\u0001\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\u0006\u0010E\u001a\u00020!ø\u0001\u0000¢\u0006\u0006\bù\u0001\u0010î\u0001J'\u0010ü\u0001\u001a\u00020!2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\bû\u0001\u0010Á\u0001J3\u0010ý\u0001\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\u0006\u0010E\u001a\u00020!H\u0001¢\u0006\u0005\bý\u0001\u0010JJ.\u0010\u0080\u0002\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\b\b\u0001\u0010E\u001a\u00020\u0010ø\u0001\u0000¢\u0006\u0006\bþ\u0001\u0010ÿ\u0001J'\u0010\u0082\u0002\u001a\u00020\u00102\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!H\u0086@ø\u0001\u0000¢\u0006\u0006\b\u0081\u0002\u0010Á\u0001J5\u0010\u0083\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!2\b\b\u0001\u0010E\u001a\u00020\u0010H\u0001¢\u0006\u0005\b\u0083\u0002\u0010SJ#\u0010\u0085\u0002\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!ø\u0001\u0000¢\u0006\u0005\b\u0084\u0002\u0010`J+\u0010\u0086\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010=\u001a\u00030\u008a\u00012\u0007\u0010\u008b\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b\u0086\u0002\u0010VJ-\u0010\u008a\u0002\u001a\u00020\n2\u0007\u0010=\u001a\u00030\u008a\u00012\u0006\u0010C\u001a\u00020!2\u0007\u0010W\u001a\u00030\u0087\u0002ø\u0001\u0000¢\u0006\u0006\b\u0088\u0002\u0010\u0089\u0002J\"\u0010\u008d\u0002\u001a\u00030\u008b\u00022\u0006\u0010\u0017\u001a\u00020\u0016H\u0086@ø\u0001\u0001ø\u0001\u0000¢\u0006\u0006\b\u008c\u0002\u0010\u00ad\u0001J\"\u0010\u008e\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010Z\u001a\u00030\u008b\u0002H\u0001¢\u0006\u0005\b\u008e\u0002\u0010\\J\"\u0010\u008f\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b\u008f\u0002\u0010`J\u001b\u0010\u0091\u0002\u001a\u00020\n2\u0007\u0010Z\u001a\u00030\u008b\u0002ø\u0001\u0000¢\u0006\u0005\b\u0090\u0002\u0010\fJ$\u0010\u0094\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!2\u0007\u0010Z\u001a\u00030\u008b\u0002ø\u0001\u0000¢\u0006\u0006\b\u0092\u0002\u0010\u0093\u0002J\u0018\u0010\u0095\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!¢\u0006\u0006\b\u0095\u0002\u0010\u0098\u0001J\"\u0010\u0098\u0002\u001a\u00030\u0096\u00022\u0006\u0010\u0017\u001a\u00020\u0016H\u0086@ø\u0001\u0001ø\u0001\u0000¢\u0006\u0006\b\u0097\u0002\u0010\u00ad\u0001J\"\u0010\u0099\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010b\u001a\u00030\u0096\u0002H\u0001¢\u0006\u0005\b\u0099\u0002\u0010\\J\"\u0010\u009a\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b\u009a\u0002\u0010`J\u001b\u0010\u009c\u0002\u001a\u00020\n2\u0007\u0010b\u001a\u00030\u0096\u0002ø\u0001\u0000¢\u0006\u0005\b\u009b\u0002\u0010\fJ$\u0010\u009e\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!2\u0007\u0010b\u001a\u00030\u0096\u0002ø\u0001\u0000¢\u0006\u0006\b\u009d\u0002\u0010\u0093\u0002J\u0018\u0010\u009f\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!¢\u0006\u0006\b\u009f\u0002\u0010\u0098\u0001J\"\u0010¢\u0002\u001a\u00030 \u00022\u0006\u0010\u0017\u001a\u00020\u0016H\u0086@ø\u0001\u0001ø\u0001\u0000¢\u0006\u0006\b¡\u0002\u0010\u00ad\u0001J\"\u0010£\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010g\u001a\u00030 \u0002H\u0001¢\u0006\u0005\b£\u0002\u0010\\J\"\u0010¤\u0002\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00042\u0007\u0010¦\u0001\u001a\u00020!H\u0001¢\u0006\u0005\b¤\u0002\u0010`J\u001b\u0010¦\u0002\u001a\u00020\n2\u0007\u0010g\u001a\u00030 \u0002ø\u0001\u0000¢\u0006\u0005\b¥\u0002\u0010\fJ$\u0010¨\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!2\u0007\u0010g\u001a\u00030 \u0002ø\u0001\u0000¢\u0006\u0006\b§\u0002\u0010\u0093\u0002J\u0018\u0010©\u0002\u001a\u00020\n2\u0006\u0010)\u001a\u00020!¢\u0006\u0006\b©\u0002\u0010\u0098\u0001JV\u0010®\u0002\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0007\u0010ª\u0002\u001a\u00020D2\u0007\u0010«\u0002\u001a\u00020Dø\u0001\u0000¢\u0006\u0006\b¬\u0002\u0010\u00ad\u0002JV\u0010°\u0002\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0007\u0010ª\u0002\u001a\u00020D2\u0007\u0010«\u0002\u001a\u00020Dø\u0001\u0000¢\u0006\u0006\b¯\u0002\u0010\u00ad\u0002JV\u0010²\u0002\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0007\u0010ª\u0002\u001a\u00020D2\u0007\u0010«\u0002\u001a\u00020Dø\u0001\u0000¢\u0006\u0006\b±\u0002\u0010\u00ad\u0002JV\u0010´\u0002\u001a\u00020\n2\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\u0006\u0010o\u001a\u00020D2\u0006\u0010p\u001a\u00020D2\u0006\u0010q\u001a\u00020\u00102\u0007\u0010ª\u0002\u001a\u00020D2\u0007\u0010«\u0002\u001a\u00020Dø\u0001\u0000¢\u0006\u0006\b³\u0002\u0010\u00ad\u0002J)\u0010¹\u0002\u001a\u00020\n2\b\u0010¶\u0002\u001a\u00030µ\u00022\n\b\u0002\u0010¸\u0002\u001a\u00030·\u0002H\u0086@¢\u0006\u0006\b¹\u0002\u0010º\u0002J\u000f\u0010»\u0002\u001a\u00020\n¢\u0006\u0005\b»\u0002\u0010\u0003JJ\u0010¾\u0002\u001a\u00020\n2\u0007\u0010\u001e\u001a\u00030¹\u00012\u0007\u0010/\u001a\u00030Õ\u00012\u0006\u0010l\u001a\u00020k2\u0006\u0010n\u001a\u00020m2\b\u0010¢\u0001\u001a\u00030£\u00012\t\b\u0002\u0010\u0081\u0001\u001a\u00020\u0010ø\u0001\u0000¢\u0006\u0006\b¼\u0002\u0010½\u0002R\u001a\u0010\u0084\u0001\u001a\u00030¿\u00028\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0084\u0001\u0010À\u0002R\u0019\u0010Á\u0002\u001a\u00020\r8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\bÁ\u0002\u0010Â\u0002R\u0016\u0010\u0005\u001a\u00030Ã\u00028\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\u0005\u0010Ä\u0002R\u0018\u0010Å\u0002\u001a\u00030\u0086\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÅ\u0002\u0010Æ\u0002R\u0018\u0010\u0006\u001a\u00030Ç\u00028\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u0006\u0010È\u0002R\u001f\u0010É\u0002\u001a\n\u0012\u0005\u0012\u00030Õ\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÉ\u0002\u0010Ê\u0002R$\u0010Ì\u0002\u001a\n\u0012\u0005\u0012\u00030Õ\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bÌ\u0002\u0010Í\u0002\u001a\u0006\bÎ\u0002\u0010Ï\u0002R%\u0010Ð\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020D0\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÐ\u0002\u0010Ê\u0002R*\u0010Ñ\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020D0\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bÑ\u0002\u0010Í\u0002\u001a\u0006\bÒ\u0002\u0010Ï\u0002R%\u0010Ó\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020!0\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÓ\u0002\u0010Ê\u0002R*\u0010Ô\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020!0\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bÔ\u0002\u0010Í\u0002\u001a\u0006\bÕ\u0002\u0010Ï\u0002R%\u0010Ö\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020L0\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÖ\u0002\u0010Ê\u0002R*\u0010×\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020L0\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\b×\u0002\u0010Í\u0002\u001a\u0006\bØ\u0002\u0010Ï\u0002R%\u0010Ù\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020!0\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÙ\u0002\u0010Ê\u0002R*\u0010Ú\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020!0\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bÚ\u0002\u0010Í\u0002\u001a\u0006\bÛ\u0002\u0010Ï\u0002R%\u0010Ü\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\u00100\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÜ\u0002\u0010Ê\u0002R*\u0010Ý\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\u00100\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bÝ\u0002\u0010Í\u0002\u001a\u0006\bÞ\u0002\u0010Ï\u0002R%\u0010ß\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\n0\u008d\u00010\u008c\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bß\u0002\u0010Ê\u0002R*\u0010à\u0002\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\n0\u008d\u00010Ë\u00028\u0006¢\u0006\u0010\n\u0006\bà\u0002\u0010Í\u0002\u001a\u0006\bá\u0002\u0010Ï\u0002R+\u0010ä\u0002\u001a\u0016\u0012\u0004\u0012\u00020\u0004\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\u00010ã\u00020â\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\bä\u0002\u0010å\u0002R\u0018\u0010ç\u0002\u001a\u00030æ\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\bç\u0002\u0010è\u0002\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006ë\u0002"}, d2 = {"Lapp/rive/core/CommandQueue;", "", "<init>", "()V", "", ViewProps.DISPLAY, "context", "cppConstructor", "(JJ)J", "pointer", "", "cppDelete", "(J)V", "Lapp/rive/core/Listeners;", "cppCreateListeners", "(J)Lapp/rive/core/Listeners;", "", "width", "height", "cppCreateRenderTarget", "(II)J", "requestID", "", "bytes", "cppLoadFile", "(JJ[B)V", "fileHandle", "cppDeleteFile", "(JJJ)V", "cppGetArtboardNames", "artboardHandle", "cppGetStateMachineNames", "cppGetViewModelNames", "", "viewModelName", "cppGetViewModelInstanceNames", "(JJJLjava/lang/String;)V", "cppGetViewModelProperties", "cppGetEnums", "cppCreateDefaultArtboard", "(JJJ)J", StackTraceHelper.NAME_KEY, "cppCreateArtboardByName", "(JJJLjava/lang/String;)J", "cppDeleteArtboard", "cppCreateDefaultStateMachine", "cppCreateStateMachineByName", "stateMachineHandle", "cppDeleteStateMachine", "deltaTimeNs", "cppAdvanceStateMachine", "cppNamedVMCreateBlankVMI", "cppDefaultVMCreateBlankVMI", "(JJJJ)J", "cppNamedVMCreateDefaultVMI", "cppDefaultVMCreateDefaultVMI", "instanceName", "cppNamedVMCreateNamedVMI", "(JJJLjava/lang/String;Ljava/lang/String;)J", "cppDefaultVMCreateNamedVMI", "(JJJJLjava/lang/String;)J", "viewModelInstanceHandle", "path", "cppReferenceNestedVMI", "cppDeleteViewModelInstance", "cppBindViewModelInstance", "(JJJJ)V", "propertyPath", "", "value", "cppSetNumberProperty", "(JJLjava/lang/String;F)V", "cppGetNumberProperty", "cppSetStringProperty", "(JJLjava/lang/String;Ljava/lang/String;)V", "cppGetStringProperty", "", "cppSetBooleanProperty", "(JJLjava/lang/String;Z)V", "cppGetBooleanProperty", "cppSetEnumProperty", "cppGetEnumProperty", "cppSetColorProperty", "(JJLjava/lang/String;I)V", "cppGetColorProperty", "cppFireTriggerProperty", "(JJLjava/lang/String;)V", "propertyType", "cppSubscribeToProperty", "cppDecodeImage", "imageHandle", "cppDeleteImage", "(JJ)V", "cppRegisterImage", "(JLjava/lang/String;J)V", "cppUnregisterImage", "(JLjava/lang/String;)V", "cppDecodeAudio", "audioHandle", "cppDeleteAudio", "cppRegisterAudio", "cppUnregisterAudio", "cppDecodeFont", "fontHandle", "cppDeleteFont", "cppRegisterFont", "cppUnregisterFont", "Lapp/rive/runtime/kotlin/core/Fit;", "fit", "Lapp/rive/runtime/kotlin/core/Alignment;", "alignment", "surfaceWidth", "surfaceHeight", "pointerID", "x", "y", "cppPointerMove", "(JJLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;FFIFF)V", "cppPointerDown", "cppPointerUp", "cppPointerExit", "cppCreateDrawKey", "(J)J", "cppPollMessages", "eglDisplay", "eglSurface", "eglContext", "drawKey", "renderTargetPointer", "clearColor", "cppDraw", "(JJJJJJJJIILapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;I)V", "cppPointer", "dispose", "Landroid/opengl/EGLConfig;", "makeConfig", "()Landroid/opengl/EGLConfig;", "T", "Lapp/rive/core/ViewModelInstanceHandle;", "propertyName", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "Lapp/rive/core/CommandQueue$PropertyUpdate;", "flow", "onPropertyUpdated-UrmHyfM", "(JJLjava/lang/String;Ljava/lang/Object;Lkotlinx/coroutines/flow/MutableSharedFlow;)V", "onPropertyUpdated", "Lkotlin/Function1;", "nativeFn", "suspendNativeRequest", "(Lkotlin/jvm/functions/Function1;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "source", "acquire", "(Ljava/lang/String;)V", "reason", "release", "(Ljava/lang/String;Ljava/lang/String;)V", "Landroidx/lifecycle/LifecycleOwner;", "owner", "Ljava/lang/AutoCloseable;", "withLifecycle", "(Landroidx/lifecycle/LifecycleOwner;Ljava/lang/String;)Ljava/lang/AutoCloseable;", "Landroid/view/Surface;", "surface", "Lapp/rive/core/RiveSurface;", "createRiveSurface", "(Landroid/view/Surface;)Lapp/rive/core/RiveSurface;", "error", "onFileError", "onArtboardError", "onStateMachineError", "onViewModelInstanceError", "Lapp/rive/core/FileHandle;", "loadFile-xVnc2tA", "([BLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "loadFile", "onFileLoaded", "deleteFile-dJ1Evnk", "deleteFile", "", "getArtboardNames-evklBmw", "(JLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getArtboardNames", "names", "onArtboardsListed", "(JLjava/util/List;)V", "Lapp/rive/core/ArtboardHandle;", "getStateMachineNames-b88yb0A", "getStateMachineNames", "onStateMachinesListed", "getViewModelNames-evklBmw", "getViewModelNames", "onViewModelsListed", "getViewModelInstanceNames-mgMojzc", "(JLjava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getViewModelInstanceNames", "onViewModelInstancesListed", "Lapp/rive/runtime/kotlin/core/ViewModel$Property;", "getViewModelProperties-mgMojzc", "getViewModelProperties", "properties", "onViewModelPropertiesListed", "Lapp/rive/runtime/kotlin/core/File$Enum;", "getEnums-evklBmw", "getEnums", "enums", "onEnumsListed", "createDefaultArtboard-6NrLy0M", "createDefaultArtboard", "createArtboardByName-2ZIOzHc", "(JLjava/lang/String;)J", "createArtboardByName", "deleteArtboard-uiJWFY8", "deleteArtboard", "Lapp/rive/core/StateMachineHandle;", "createDefaultStateMachine-xY8vNfM", "createDefaultStateMachine", "createStateMachineByName-ItmKBmM", "createStateMachineByName", "deleteStateMachine-AkTCgDQ", "deleteStateMachine", "advanceStateMachine-OFH3VyA", "advanceStateMachine", "onStateMachineSettled", "Lapp/rive/ViewModelInstanceSource;", "createViewModelInstance-j73Dd8U", "(JLapp/rive/ViewModelInstanceSource;)J", "createViewModelInstance", "deleteViewModelInstance-mBajs_U", "deleteViewModelInstance", "bindViewModelInstance-ei-yHz8", "bindViewModelInstance", "setNumberProperty-iFQtAB8", "(JLjava/lang/String;F)V", "setNumberProperty", "getNumberProperty-iFQtAB8", "getNumberProperty", "onNumberPropertyUpdated", "setStringProperty-iFQtAB8", "(JLjava/lang/String;Ljava/lang/String;)V", "setStringProperty", "getStringProperty-iFQtAB8", "getStringProperty", "onStringPropertyUpdated", "setBooleanProperty-iFQtAB8", "(JLjava/lang/String;Z)V", "setBooleanProperty", "getBooleanProperty-iFQtAB8", "getBooleanProperty", "onBooleanPropertyUpdated", "setEnumProperty-iFQtAB8", "setEnumProperty", "getEnumProperty-iFQtAB8", "getEnumProperty", "onEnumPropertyUpdated", "setColorProperty-iFQtAB8", "(JLjava/lang/String;I)V", "setColorProperty", "getColorProperty-iFQtAB8", "getColorProperty", "onColorPropertyUpdated", "fireTriggerProperty-ippgHXQ", "fireTriggerProperty", "onTriggerPropertyUpdated", "Lapp/rive/runtime/kotlin/core/ViewModel$PropertyDataType;", "subscribeToProperty-iFQtAB8", "(JLjava/lang/String;Lapp/rive/runtime/kotlin/core/ViewModel$PropertyDataType;)V", "subscribeToProperty", "Lapp/rive/core/ImageHandle;", "decodeImage-f0BlWSU", "decodeImage", "onImageDecoded", "onImageError", "deleteImage-JwfOFvA", "deleteImage", "registerImage-QieQ09U", "(Ljava/lang/String;J)V", "registerImage", "unregisterImage", "Lapp/rive/core/AudioHandle;", "decodeAudio-WLIIakE", "decodeAudio", "onAudioDecoded", "onAudioError", "deleteAudio-QAnvCWo", "deleteAudio", "registerAudio-4kKS7jM", "registerAudio", "unregisterAudio", "Lapp/rive/core/FontHandle;", "decodeFont-sOckvAc", "decodeFont", "onFontDecoded", "onFontError", "deleteFont-wK5q9OY", "deleteFont", "registerFont-8-RWjZU", "registerFont", "unregisterFont", "pointerX", "pointerY", "pointerMove-OV3vCas", "(JLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;FFIFF)V", "pointerMove", "pointerDown-OV3vCas", "pointerDown", "pointerUp-OV3vCas", "pointerUp", "pointerExit-OV3vCas", "pointerExit", "Landroidx/lifecycle/Lifecycle;", "lifecycle", "Lapp/rive/core/FrameTicker;", "ticker", "beginPolling", "(Landroidx/lifecycle/Lifecycle;Lapp/rive/core/FrameTicker;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "pollMessages", "draw-POUf8go", "(JJLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;Lapp/rive/core/RiveSurface;I)V", "draw", "Lapp/rive/core/RCPointer;", "Lapp/rive/core/RCPointer;", "listeners", "Lapp/rive/core/Listeners;", "Landroid/opengl/EGLDisplay;", "Landroid/opengl/EGLDisplay;", "config", "Landroid/opengl/EGLConfig;", "Landroid/opengl/EGLContext;", "Landroid/opengl/EGLContext;", "_settledFlow", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "Ljs/a0;", "settledFlow", "Ljs/a0;", "getSettledFlow", "()Ljs/a0;", "_numberPropertyFlow", "numberPropertyFlow", "getNumberPropertyFlow", "_stringPropertyFlow", "stringPropertyFlow", "getStringPropertyFlow", "_booleanPropertyFlow", "booleanPropertyFlow", "getBooleanPropertyFlow", "_enumPropertyFlow", "enumPropertyFlow", "getEnumPropertyFlow", "_colorPropertyFlow", "colorPropertyFlow", "getColorPropertyFlow", "_triggerPropertyFlow", "triggerPropertyFlow", "getTriggerPropertyFlow", "Ljava/util/concurrent/ConcurrentHashMap;", "Lkotlinx/coroutines/CancellableContinuation;", "pendingContinuations", "Ljava/util/concurrent/ConcurrentHashMap;", "Ljava/util/concurrent/atomic/AtomicLong;", "nextRequestID", "Ljava/util/concurrent/atomic/AtomicLong;", "Companion", "PropertyUpdate", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue\n+ 2 RiveLog.kt\napp/rive/RiveLog\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,2459:1\n2267#1:2464\n2281#1:2465\n2267#1:2466\n2281#1:2467\n2267#1:2468\n2281#1:2469\n2267#1:2470\n2281#1:2471\n2267#1:2472\n2281#1:2473\n2267#1:2474\n2281#1:2475\n2267#1:2476\n2281#1:2477\n2267#1:2478\n2281#1:2479\n2267#1:2480\n2281#1:2481\n2267#1:2482\n2281#1:2483\n2267#1:2484\n2281#1:2485\n2267#1:2486\n2281#1:2487\n2267#1:2488\n2281#1:2489\n2267#1:2490\n2281#1:2491\n2267#1:2492\n2281#1:2493\n57#2:2460\n57#2:2463\n1863#3,2:2461\n*S KotlinDebug\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue\n*L\n749#1:2464\n749#1:2465\n791#1:2466\n791#1:2467\n824#1:2468\n824#1:2469\n857#1:2470\n857#1:2471\n895#1:2472\n895#1:2473\n934#1:2474\n934#1:2475\n972#1:2476\n972#1:2477\n1328#1:2478\n1328#1:2479\n1401#1:2480\n1401#1:2481\n1474#1:2482\n1474#1:2483\n1547#1:2484\n1547#1:2485\n1620#1:2486\n1620#1:2487\n1736#1:2488\n1736#1:2489\n1829#1:2490\n1829#1:2491\n1923#1:2492\n1923#1:2493\n604#1:2460\n645#1:2463\n442#1:2461,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CommandQueue {
    public static final int MAX_CONCURRENT_SUBSCRIBERS = 32;
    public static final long NULL_POINTER = 0;
    @NotNull
    private final MutableSharedFlow _booleanPropertyFlow;
    @NotNull
    private final MutableSharedFlow _colorPropertyFlow;
    @NotNull
    private final MutableSharedFlow _enumPropertyFlow;
    @NotNull
    private final MutableSharedFlow _numberPropertyFlow;
    @NotNull
    private final MutableSharedFlow _settledFlow;
    @NotNull
    private final MutableSharedFlow _stringPropertyFlow;
    @NotNull
    private final MutableSharedFlow _triggerPropertyFlow;
    @NotNull
    private final a0 booleanPropertyFlow;
    @NotNull
    private final a0 colorPropertyFlow;
    @NotNull
    private final EGLConfig config;
    @NotNull
    private EGLContext context;
    @NotNull
    private RCPointer cppPointer;
    @NotNull
    private final EGLDisplay display;
    @NotNull
    private final a0 enumPropertyFlow;
    @NotNull
    private Listeners listeners;
    @NotNull
    private final AtomicLong nextRequestID;
    @NotNull
    private final a0 numberPropertyFlow;
    @NotNull
    private final ConcurrentHashMap<Long, CancellableContinuation> pendingContinuations;
    @NotNull
    private final a0 settledFlow;
    @NotNull
    private final a0 stringPropertyFlow;
    @NotNull
    private final a0 triggerPropertyFlow;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
    /* renamed from: app.rive.core.CommandQueue$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    /* synthetic */ class AnonymousClass2 extends FunctionReferenceImpl implements Function1<Long, Unit> {
        AnonymousClass2(Object obj) {
            super(1, obj, CommandQueue.class, "dispose", "dispose(J)V", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke(((Number) obj).longValue());
            return Unit.f33282a;
        }

        public final void invoke(long j10) {
            ((CommandQueue) this.receiver).dispose(j10);
        }
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lapp/rive/core/CommandQueue$Companion;", "", "()V", "MAX_CONCURRENT_SUBSCRIBERS", "", "NULL_POINTER", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u0000*\u0004\b\u0000\u0010\u00012\u00020\u0002B\u001d\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00028\u0000¢\u0006\u0002\u0010\bJ\u0016\u0010\u0011\u001a\u00020\u0004HÆ\u0003ø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b\u0012\u0010\nJ\t\u0010\u0013\u001a\u00020\u0006HÆ\u0003J\u000e\u0010\u0014\u001a\u00028\u0000HÆ\u0003¢\u0006\u0002\u0010\u000fJ7\u0010\u0015\u001a\b\u0012\u0004\u0012\u00028\u00000\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00028\u0000HÆ\u0001ø\u0001\u0000¢\u0006\u0004\b\u0016\u0010\u0017J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0002HÖ\u0003J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0006HÖ\u0001R\u0019\u0010\u0003\u001a\u00020\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\n\n\u0002\u0010\u000b\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0007\u001a\u00028\u0000¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000f\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006\u001e"}, d2 = {"Lapp/rive/core/CommandQueue$PropertyUpdate;", "T", "", "handle", "Lapp/rive/core/ViewModelInstanceHandle;", "propertyPath", "", "value", "(JLjava/lang/String;Ljava/lang/Object;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getHandle-VPLto4w", "()J", "J", "getPropertyPath", "()Ljava/lang/String;", "getValue", "()Ljava/lang/Object;", "Ljava/lang/Object;", "component1", "component1-VPLto4w", "component2", "component3", "copy", "copy-iFQtAB8", "(JLjava/lang/String;Ljava/lang/Object;)Lapp/rive/core/CommandQueue$PropertyUpdate;", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class PropertyUpdate<T> {
        public static final int $stable = 0;
        private final long handle;
        @NotNull
        private final String propertyPath;
        private final T value;

        public /* synthetic */ PropertyUpdate(long j10, String str, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(j10, str, obj);
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* renamed from: copy-iFQtAB8$default  reason: not valid java name */
        public static /* synthetic */ PropertyUpdate m152copyiFQtAB8$default(PropertyUpdate propertyUpdate, long j10, String str, Object obj, int i10, Object obj2) {
            if ((i10 & 1) != 0) {
                j10 = propertyUpdate.handle;
            }
            if ((i10 & 2) != 0) {
                str = propertyUpdate.propertyPath;
            }
            if ((i10 & 4) != 0) {
                obj = propertyUpdate.value;
            }
            return propertyUpdate.m154copyiFQtAB8(j10, str, obj);
        }

        /* renamed from: component1-VPLto4w  reason: not valid java name */
        public final long m153component1VPLto4w() {
            return this.handle;
        }

        @NotNull
        public final String component2() {
            return this.propertyPath;
        }

        public final T component3() {
            return this.value;
        }

        @NotNull
        /* renamed from: copy-iFQtAB8  reason: not valid java name */
        public final PropertyUpdate<T> m154copyiFQtAB8(long j10, @NotNull String propertyPath, T t10) {
            Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
            return new PropertyUpdate<>(j10, propertyPath, t10, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof PropertyUpdate) {
                PropertyUpdate propertyUpdate = (PropertyUpdate) obj;
                return ViewModelInstanceHandle.m200equalsimpl0(this.handle, propertyUpdate.handle) && Intrinsics.areEqual(this.propertyPath, propertyUpdate.propertyPath) && Intrinsics.areEqual(this.value, propertyUpdate.value);
            }
            return false;
        }

        /* renamed from: getHandle-VPLto4w  reason: not valid java name */
        public final long m155getHandleVPLto4w() {
            return this.handle;
        }

        @NotNull
        public final String getPropertyPath() {
            return this.propertyPath;
        }

        public final T getValue() {
            return this.value;
        }

        public int hashCode() {
            int m201hashCodeimpl = ((ViewModelInstanceHandle.m201hashCodeimpl(this.handle) * 31) + this.propertyPath.hashCode()) * 31;
            T t10 = this.value;
            return m201hashCodeimpl + (t10 == null ? 0 : t10.hashCode());
        }

        @NotNull
        public String toString() {
            String m202toStringimpl = ViewModelInstanceHandle.m202toStringimpl(this.handle);
            String str = this.propertyPath;
            T t10 = this.value;
            return "PropertyUpdate(handle=" + m202toStringimpl + ", propertyPath=" + str + ", value=" + t10 + ")";
        }

        private PropertyUpdate(long j10, String propertyPath, T t10) {
            Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
            this.handle = j10;
            this.propertyPath = propertyPath;
            this.value = t10;
        }
    }

    public CommandQueue() {
        EGLDisplay eglGetDisplay = EGL14.eglGetDisplay(0);
        if (!Intrinsics.areEqual(eglGetDisplay, EGL14.EGL_NO_DISPLAY)) {
            if (EGL14.eglInitialize(eglGetDisplay, null, 0, null, 0)) {
                Intrinsics.checkNotNullExpressionValue(eglGetDisplay, "also(...)");
                this.display = eglGetDisplay;
                EGLConfig makeConfig = makeConfig();
                this.config = makeConfig;
                EGLContext EGL_NO_CONTEXT = EGL14.EGL_NO_CONTEXT;
                Intrinsics.checkNotNullExpressionValue(EGL_NO_CONTEXT, "EGL_NO_CONTEXT");
                this.context = EGL_NO_CONTEXT;
                a aVar = a.f31126e;
                MutableSharedFlow a10 = c0.a(0, 32, aVar);
                this._settledFlow = a10;
                this.settledFlow = a10;
                MutableSharedFlow a11 = c0.a(0, 32, aVar);
                this._numberPropertyFlow = a11;
                this.numberPropertyFlow = a11;
                MutableSharedFlow a12 = c0.a(0, 32, aVar);
                this._stringPropertyFlow = a12;
                this.stringPropertyFlow = a12;
                MutableSharedFlow a13 = c0.a(0, 32, aVar);
                this._booleanPropertyFlow = a13;
                this.booleanPropertyFlow = a13;
                MutableSharedFlow a14 = c0.a(0, 32, aVar);
                this._enumPropertyFlow = a14;
                this.enumPropertyFlow = a14;
                MutableSharedFlow a15 = c0.a(0, 32, aVar);
                this._colorPropertyFlow = a15;
                this.colorPropertyFlow = a15;
                MutableSharedFlow a16 = c0.a(0, 32, aVar);
                this._triggerPropertyFlow = a16;
                this.triggerPropertyFlow = a16;
                RiveLog.INSTANCE.getLogger().d(CommandQueueKt.COMMAND_QUEUE_TAG, new Function0<String>() { // from class: app.rive.core.CommandQueue.1
                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        return "Creating command queue";
                    }
                });
                int eglGetError = EGL14.eglGetError();
                if (eglGetError == 12288) {
                    int[] iArr = new int[2];
                    if (EGL14.eglInitialize(eglGetDisplay, iArr, 0, iArr, 1)) {
                        EGLContext eglCreateContext = EGL14.eglCreateContext(eglGetDisplay, makeConfig, EGL14.EGL_NO_CONTEXT, new int[]{12440, 2, 12344}, 0);
                        Intrinsics.checkNotNullExpressionValue(eglCreateContext, "eglCreateContext(...)");
                        this.context = eglCreateContext;
                        if (!Intrinsics.areEqual(eglCreateContext, EGL14.EGL_NO_CONTEXT)) {
                            RCPointer rCPointer = new RCPointer(cppConstructor(eglGetDisplay.getNativeHandle(), this.context.getNativeHandle()), new AnonymousClass2(this), CommandQueueKt.COMMAND_QUEUE_TAG);
                            this.cppPointer = rCPointer;
                            this.listeners = cppCreateListeners(rCPointer.getPointer());
                            this.pendingContinuations = new ConcurrentHashMap<>();
                            this.nextRequestID = new AtomicLong();
                            return;
                        }
                        throw new RuntimeException("Unable to create EGL context");
                    }
                    throw new RuntimeException("Unable to initialize EGL");
                }
                throw new RuntimeException("EGL error: " + eglGetError);
            }
            throw new RuntimeException("Unable to initialize EGL");
        }
        throw new RuntimeException("Unable to get EGL display");
    }

    public static /* synthetic */ Object beginPolling$default(CommandQueue commandQueue, Lifecycle lifecycle, FrameTicker frameTicker, Continuation continuation, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            frameTicker = FrameTickerKt.getChoreographerFrameTicker();
        }
        return commandQueue.beginPolling(lifecycle, frameTicker, continuation);
    }

    private final native void cppAdvanceStateMachine(long j10, long j11, long j12);

    private final native void cppBindViewModelInstance(long j10, long j11, long j12, long j13);

    private final native long cppConstructor(long j10, long j11);

    private final native long cppCreateArtboardByName(long j10, long j11, long j12, String str);

    private final native long cppCreateDefaultArtboard(long j10, long j11, long j12);

    private final native long cppCreateDefaultStateMachine(long j10, long j11, long j12);

    private final native long cppCreateDrawKey(long j10);

    private final native Listeners cppCreateListeners(long j10);

    private final native long cppCreateRenderTarget(int i10, int i11);

    private final native long cppCreateStateMachineByName(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppDecodeAudio(long j10, long j11, byte[] bArr);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppDecodeFont(long j10, long j11, byte[] bArr);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppDecodeImage(long j10, long j11, byte[] bArr);

    private final native long cppDefaultVMCreateBlankVMI(long j10, long j11, long j12, long j13);

    private final native long cppDefaultVMCreateDefaultVMI(long j10, long j11, long j12, long j13);

    private final native long cppDefaultVMCreateNamedVMI(long j10, long j11, long j12, long j13, String str);

    private final native void cppDelete(long j10);

    private final native void cppDeleteArtboard(long j10, long j11, long j12);

    private final native void cppDeleteAudio(long j10, long j11);

    private final native void cppDeleteFile(long j10, long j11, long j12);

    private final native void cppDeleteFont(long j10, long j11);

    private final native void cppDeleteImage(long j10, long j11);

    private final native void cppDeleteStateMachine(long j10, long j11, long j12);

    private final native void cppDeleteViewModelInstance(long j10, long j11, long j12);

    private final native void cppDraw(long j10, long j11, long j12, long j13, long j14, long j15, long j16, long j17, int i10, int i11, Fit fit, Alignment alignment, int i12);

    private final native void cppFireTriggerProperty(long j10, long j11, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetArtboardNames(long j10, long j11, long j12);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetBooleanProperty(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetColorProperty(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetEnumProperty(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetEnums(long j10, long j11, long j12);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetNumberProperty(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetStateMachineNames(long j10, long j11, long j12);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetStringProperty(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetViewModelInstanceNames(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetViewModelNames(long j10, long j11, long j12);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppGetViewModelProperties(long j10, long j11, long j12, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final native void cppLoadFile(long j10, long j11, byte[] bArr);

    private final native long cppNamedVMCreateBlankVMI(long j10, long j11, long j12, String str);

    private final native long cppNamedVMCreateDefaultVMI(long j10, long j11, long j12, String str);

    private final native long cppNamedVMCreateNamedVMI(long j10, long j11, long j12, String str, String str2);

    private final native void cppPointerDown(long j10, long j11, Fit fit, Alignment alignment, float f10, float f11, int i10, float f12, float f13);

    private final native void cppPointerExit(long j10, long j11, Fit fit, Alignment alignment, float f10, float f11, int i10, float f12, float f13);

    private final native void cppPointerMove(long j10, long j11, Fit fit, Alignment alignment, float f10, float f11, int i10, float f12, float f13);

    private final native void cppPointerUp(long j10, long j11, Fit fit, Alignment alignment, float f10, float f11, int i10, float f12, float f13);

    private final native void cppPollMessages(long j10);

    private final native long cppReferenceNestedVMI(long j10, long j11, long j12, String str);

    private final native void cppRegisterAudio(long j10, String str, long j11);

    private final native void cppRegisterFont(long j10, String str, long j11);

    private final native void cppRegisterImage(long j10, String str, long j11);

    private final native void cppSetBooleanProperty(long j10, long j11, String str, boolean z10);

    private final native void cppSetColorProperty(long j10, long j11, String str, int i10);

    private final native void cppSetEnumProperty(long j10, long j11, String str, String str2);

    private final native void cppSetNumberProperty(long j10, long j11, String str, float f10);

    private final native void cppSetStringProperty(long j10, long j11, String str, String str2);

    private final native void cppSubscribeToProperty(long j10, long j11, String str, int i10);

    private final native void cppUnregisterAudio(long j10, String str);

    private final native void cppUnregisterFont(long j10, String str);

    private final native void cppUnregisterImage(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public final void dispose(long j10) {
        cppDelete(j10);
        this.listeners.dispose$kotlin_release();
        Collection<CancellableContinuation> values = this.pendingContinuations.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        for (CancellableContinuation cancellableContinuation : values) {
            cancellableContinuation.g(new CancellationException("CommandQueue was released before operation could complete."));
        }
    }

    /* renamed from: draw-POUf8go$default  reason: not valid java name */
    public static /* synthetic */ void m106drawPOUf8go$default(CommandQueue commandQueue, long j10, long j11, Fit fit, Alignment alignment, RiveSurface riveSurface, int i10, int i11, Object obj) {
        int i12;
        if ((i11 & 32) != 0) {
            i12 = 0;
        } else {
            i12 = i10;
        }
        commandQueue.m125drawPOUf8go(j10, j11, fit, alignment, riveSurface, i12);
    }

    private final EGLConfig makeConfig() {
        EGLConfig[] eGLConfigArr = new EGLConfig[1];
        EGL14.eglChooseConfig(this.display, new int[]{12352, 4, 12324, 8, 12323, 8, 12322, 8, 12321, 8, 12325, 0, 12326, 8, 12344}, 0, eGLConfigArr, 0, 1, new int[1], 0);
        EGLConfig eGLConfig = eGLConfigArr[0];
        if (eGLConfig != null) {
            return eGLConfig;
        }
        throw new RuntimeException("Unable to find a suitable EGLConfig");
    }

    /* renamed from: onPropertyUpdated-UrmHyfM  reason: not valid java name */
    private final <T> void m107onPropertyUpdatedUrmHyfM(long j10, long j11, String str, T t10, MutableSharedFlow mutableSharedFlow) {
        mutableSharedFlow.b(new PropertyUpdate(j11, str, t10, null));
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove != null) {
            Result.a aVar = Result.f33279e;
            Intrinsics.checkNotNull(t10, "null cannot be cast to non-null type kotlin.Any");
            remove.resumeWith(Result.b(t10));
        }
    }

    public static /* synthetic */ void release$default(CommandQueue commandQueue, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = "";
        }
        commandQueue.release(str, str2);
    }

    private final /* synthetic */ <T> Object suspendNativeRequest(Function1<? super Long, Unit> function1, Continuation<? super T> continuation) {
        c1 f22 = m0.c().f2();
        Intrinsics.needClassReification();
        CommandQueue$suspendNativeRequest$2 commandQueue$suspendNativeRequest$2 = new CommandQueue$suspendNativeRequest$2(this, function1, null);
        InlineMarker.mark(0);
        Object g10 = g.g(f22, commandQueue$suspendNativeRequest$2, continuation);
        InlineMarker.mark(1);
        return g10;
    }

    public final void acquire(@NotNull String source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.cppPointer.acquire(source);
    }

    /* renamed from: advanceStateMachine-OFH3VyA  reason: not valid java name */
    public final void m108advanceStateMachineOFH3VyA(long j10, long j11) {
        cppAdvanceStateMachine(this.cppPointer.getPointer(), j10, j11);
    }

    public final Object beginPolling(@NotNull Lifecycle lifecycle, @NotNull FrameTicker frameTicker, @NotNull Continuation<? super Unit> continuation) {
        Object a10 = z.a(lifecycle, Lifecycle.State.f4396p, new CommandQueue$beginPolling$2(frameTicker, this, null), continuation);
        if (a10 == b.f()) {
            return a10;
        }
        return Unit.f33282a;
    }

    /* renamed from: bindViewModelInstance-ei-yHz8  reason: not valid java name */
    public final void m109bindViewModelInstanceeiyHz8(long j10, long j11) {
        cppBindViewModelInstance(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, j11);
    }

    /* renamed from: createArtboardByName-2ZIOzHc  reason: not valid java name */
    public final long m110createArtboardByName2ZIOzHc(long j10, @NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return ArtboardHandle.m93constructorimpl(cppCreateArtboardByName(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, name));
    }

    /* renamed from: createDefaultArtboard-6NrLy0M  reason: not valid java name */
    public final long m111createDefaultArtboard6NrLy0M(long j10) {
        return ArtboardHandle.m93constructorimpl(cppCreateDefaultArtboard(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10));
    }

    /* renamed from: createDefaultStateMachine-xY8vNfM  reason: not valid java name */
    public final long m112createDefaultStateMachinexY8vNfM(long j10) {
        return StateMachineHandle.m191constructorimpl(cppCreateDefaultStateMachine(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10));
    }

    @NotNull
    public final RiveSurface createRiveSurface(@NotNull Surface surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        RiveLog.INSTANCE.getLogger().d("RiveUI/Surface", new Function0<String>() { // from class: app.rive.core.CommandQueue$createRiveSurface$1
            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                return "Creating rendering surface";
            }
        });
        EGLSurface eglCreateWindowSurface = EGL14.eglCreateWindowSurface(this.display, this.config, surface, new int[]{12344}, 0);
        if (!Intrinsics.areEqual(eglCreateWindowSurface, EGL14.EGL_NO_SURFACE)) {
            int[] iArr = new int[2];
            EGL14.eglQuerySurface(this.display, eglCreateWindowSurface, 12375, iArr, 0);
            EGL14.eglQuerySurface(this.display, eglCreateWindowSurface, 12374, iArr, 1);
            int i10 = iArr[0];
            int i11 = iArr[1];
            long cppCreateRenderTarget = cppCreateRenderTarget(i10, i11);
            long m159constructorimpl = DrawKey.m159constructorimpl(cppCreateDrawKey(this.cppPointer.getPointer()));
            Intrinsics.checkNotNull(eglCreateWindowSurface);
            return new RiveSurface(surface, eglCreateWindowSurface, this.display, cppCreateRenderTarget, m159constructorimpl, i10, i11, null);
        }
        throw new RuntimeException("Unable to create EGL surface");
    }

    /* renamed from: createStateMachineByName-ItmKBmM  reason: not valid java name */
    public final long m113createStateMachineByNameItmKBmM(long j10, @NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return StateMachineHandle.m191constructorimpl(cppCreateStateMachineByName(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, name));
    }

    /* renamed from: createViewModelInstance-j73Dd8U  reason: not valid java name */
    public final long m114createViewModelInstancej73Dd8U(long j10, @NotNull ViewModelInstanceSource source) {
        Intrinsics.checkNotNullParameter(source, "source");
        if (source instanceof ViewModelInstanceSource.Blank) {
            ViewModelSource m64unboximpl = ((ViewModelInstanceSource.Blank) source).m64unboximpl();
            if (m64unboximpl instanceof ViewModelSource.Named) {
                return ViewModelInstanceHandle.m198constructorimpl(cppNamedVMCreateBlankVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.Named) m64unboximpl).m91unboximpl()));
            }
            if (m64unboximpl instanceof ViewModelSource.DefaultForArtboard) {
                return ViewModelInstanceHandle.m198constructorimpl(cppDefaultVMCreateBlankVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.DefaultForArtboard) m64unboximpl).m81unboximpl().m15getArtboardHandlenSTdbJo$kotlin_release()));
            }
            throw new p();
        } else if (source instanceof ViewModelInstanceSource.Default) {
            ViewModelSource m71unboximpl = ((ViewModelInstanceSource.Default) source).m71unboximpl();
            if (m71unboximpl instanceof ViewModelSource.Named) {
                return ViewModelInstanceHandle.m198constructorimpl(cppNamedVMCreateDefaultVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.Named) m71unboximpl).m91unboximpl()));
            }
            if (m71unboximpl instanceof ViewModelSource.DefaultForArtboard) {
                return ViewModelInstanceHandle.m198constructorimpl(cppDefaultVMCreateDefaultVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.DefaultForArtboard) m71unboximpl).m81unboximpl().m15getArtboardHandlenSTdbJo$kotlin_release()));
            }
            throw new p();
        } else if (source instanceof ViewModelInstanceSource.Named) {
            ViewModelInstanceSource.Named named = (ViewModelInstanceSource.Named) source;
            ViewModelSource vmSource = named.getVmSource();
            if (vmSource instanceof ViewModelSource.Named) {
                return ViewModelInstanceHandle.m198constructorimpl(cppNamedVMCreateNamedVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.Named) vmSource).m91unboximpl(), named.getInstanceName()));
            }
            if (vmSource instanceof ViewModelSource.DefaultForArtboard) {
                return ViewModelInstanceHandle.m198constructorimpl(cppDefaultVMCreateNamedVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10, ((ViewModelSource.DefaultForArtboard) vmSource).m81unboximpl().m15getArtboardHandlenSTdbJo$kotlin_release(), named.getInstanceName()));
            }
            throw new p();
        } else if (source instanceof ViewModelInstanceSource.Reference) {
            ViewModelInstanceSource.Reference reference = (ViewModelInstanceSource.Reference) source;
            return ViewModelInstanceHandle.m198constructorimpl(cppReferenceNestedVMI(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), reference.getInstance().m46getInstanceHandleVPLto4w$kotlin_release(), reference.getPath()));
        } else {
            throw new p();
        }
    }

    /* renamed from: decodeAudio-WLIIakE  reason: not valid java name */
    public final Object m115decodeAudioWLIIakE(@NotNull byte[] bArr, @NotNull Continuation<? super AudioHandle> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$decodeAudioWLIIakE$$inlined$suspendNativeRequest$1(this, null, this, bArr), continuation);
    }

    /* renamed from: decodeFont-sOckvAc  reason: not valid java name */
    public final Object m116decodeFontsOckvAc(@NotNull byte[] bArr, @NotNull Continuation<? super FontHandle> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$decodeFontsOckvAc$$inlined$suspendNativeRequest$1(this, null, this, bArr), continuation);
    }

    /* renamed from: decodeImage-f0BlWSU  reason: not valid java name */
    public final Object m117decodeImagef0BlWSU(@NotNull byte[] bArr, @NotNull Continuation<? super ImageHandle> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$decodeImagef0BlWSU$$inlined$suspendNativeRequest$1(this, null, this, bArr), continuation);
    }

    /* renamed from: deleteArtboard-uiJWFY8  reason: not valid java name */
    public final void m118deleteArtboarduiJWFY8(long j10) {
        cppDeleteArtboard(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10);
    }

    /* renamed from: deleteAudio-QAnvCWo  reason: not valid java name */
    public final void m119deleteAudioQAnvCWo(long j10) {
        cppDeleteAudio(this.cppPointer.getPointer(), j10);
    }

    /* renamed from: deleteFile-dJ1Evnk  reason: not valid java name */
    public final void m120deleteFiledJ1Evnk(long j10) {
        cppDeleteFile(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10);
    }

    /* renamed from: deleteFont-wK5q9OY  reason: not valid java name */
    public final void m121deleteFontwK5q9OY(long j10) {
        cppDeleteFont(this.cppPointer.getPointer(), j10);
    }

    /* renamed from: deleteImage-JwfOFvA  reason: not valid java name */
    public final void m122deleteImageJwfOFvA(long j10) {
        cppDeleteImage(this.cppPointer.getPointer(), j10);
    }

    /* renamed from: deleteStateMachine-AkTCgDQ  reason: not valid java name */
    public final void m123deleteStateMachineAkTCgDQ(long j10) {
        cppDeleteStateMachine(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10);
    }

    /* renamed from: deleteViewModelInstance-mBajs_U  reason: not valid java name */
    public final void m124deleteViewModelInstancemBajs_U(long j10) {
        cppDeleteViewModelInstance(this.cppPointer.getPointer(), this.nextRequestID.getAndIncrement(), j10);
    }

    /* renamed from: draw-POUf8go  reason: not valid java name */
    public final void m125drawPOUf8go(long j10, long j11, @NotNull Fit fit, @NotNull Alignment alignment, @NotNull RiveSurface surface, int i10) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(surface, "surface");
        cppDraw(this.cppPointer.getPointer(), this.display.getNativeHandle(), surface.getEglSurface().getNativeHandle(), this.context.getNativeHandle(), surface.m189getDrawKeyDhFih_o(), j10, j11, surface.getRenderTargetPointer(), surface.getWidth(), surface.getHeight(), fit, alignment, i10);
    }

    /* renamed from: fireTriggerProperty-ippgHXQ  reason: not valid java name */
    public final void m126fireTriggerPropertyippgHXQ(long j10, @NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        cppFireTriggerProperty(this.cppPointer.getPointer(), j10, propertyPath);
    }

    /* renamed from: getArtboardNames-evklBmw  reason: not valid java name */
    public final Object m127getArtboardNamesevklBmw(long j10, @NotNull Continuation<? super List<String>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getArtboardNamesevklBmw$$inlined$suspendNativeRequest$1(this, null, this, j10), continuation);
    }

    /* renamed from: getBooleanProperty-iFQtAB8  reason: not valid java name */
    public final Object m128getBooleanPropertyiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super Boolean> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getBooleanPropertyiFQtAB8$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    @NotNull
    public final a0 getBooleanPropertyFlow() {
        return this.booleanPropertyFlow;
    }

    /* renamed from: getColorProperty-iFQtAB8  reason: not valid java name */
    public final Object m129getColorPropertyiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super Integer> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getColorPropertyiFQtAB8$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    @NotNull
    public final a0 getColorPropertyFlow() {
        return this.colorPropertyFlow;
    }

    /* renamed from: getEnumProperty-iFQtAB8  reason: not valid java name */
    public final Object m130getEnumPropertyiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super String> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getEnumPropertyiFQtAB8$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    @NotNull
    public final a0 getEnumPropertyFlow() {
        return this.enumPropertyFlow;
    }

    /* renamed from: getEnums-evklBmw  reason: not valid java name */
    public final Object m131getEnumsevklBmw(long j10, @NotNull Continuation<? super List<File.Enum>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getEnumsevklBmw$$inlined$suspendNativeRequest$1(this, null, this, j10), continuation);
    }

    /* renamed from: getNumberProperty-iFQtAB8  reason: not valid java name */
    public final Object m132getNumberPropertyiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super Float> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getNumberPropertyiFQtAB8$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    @NotNull
    public final a0 getNumberPropertyFlow() {
        return this.numberPropertyFlow;
    }

    @NotNull
    public final a0 getSettledFlow() {
        return this.settledFlow;
    }

    /* renamed from: getStateMachineNames-b88yb0A  reason: not valid java name */
    public final Object m133getStateMachineNamesb88yb0A(long j10, @NotNull Continuation<? super List<String>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getStateMachineNamesb88yb0A$$inlined$suspendNativeRequest$1(this, null, this, j10), continuation);
    }

    /* renamed from: getStringProperty-iFQtAB8  reason: not valid java name */
    public final Object m134getStringPropertyiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super String> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getStringPropertyiFQtAB8$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    @NotNull
    public final a0 getStringPropertyFlow() {
        return this.stringPropertyFlow;
    }

    @NotNull
    public final a0 getTriggerPropertyFlow() {
        return this.triggerPropertyFlow;
    }

    /* renamed from: getViewModelInstanceNames-mgMojzc  reason: not valid java name */
    public final Object m135getViewModelInstanceNamesmgMojzc(long j10, @NotNull String str, @NotNull Continuation<? super List<String>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getViewModelInstanceNamesmgMojzc$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    /* renamed from: getViewModelNames-evklBmw  reason: not valid java name */
    public final Object m136getViewModelNamesevklBmw(long j10, @NotNull Continuation<? super List<String>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getViewModelNamesevklBmw$$inlined$suspendNativeRequest$1(this, null, this, j10), continuation);
    }

    /* renamed from: getViewModelProperties-mgMojzc  reason: not valid java name */
    public final Object m137getViewModelPropertiesmgMojzc(long j10, @NotNull String str, @NotNull Continuation<? super List<ViewModel.Property>> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$getViewModelPropertiesmgMojzc$$inlined$suspendNativeRequest$1(this, null, this, j10, str), continuation);
    }

    /* renamed from: loadFile-xVnc2tA  reason: not valid java name */
    public final Object m138loadFilexVnc2tA(@NotNull byte[] bArr, @NotNull Continuation<? super FileHandle> continuation) {
        return g.g(m0.c().f2(), new CommandQueue$loadFilexVnc2tA$$inlined$suspendNativeRequest$1(this, null, this, bArr), continuation);
    }

    @Keep
    public final void onArtboardError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("Artboard error: " + error))));
        }
    }

    @Keep
    public final void onArtboardsListed(long j10, @NotNull List<String> names) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(names, "names");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(names));
        }
    }

    @Keep
    public final void onAudioDecoded(long j10, long j11) {
        CancellableContinuation cancellableContinuation;
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(AudioHandle.m99boximpl(j11)));
        }
    }

    @Keep
    public final void onAudioError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("Failed to decode audio: " + error))));
        }
    }

    @Keep
    public final void onBooleanPropertyUpdated(long j10, long j11, @NotNull String propertyName, boolean z10) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, Boolean.valueOf(z10), this._booleanPropertyFlow);
    }

    @Keep
    public final void onColorPropertyUpdated(long j10, long j11, @NotNull String propertyName, int i10) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, Integer.valueOf(i10), this._colorPropertyFlow);
    }

    @Keep
    public final void onEnumPropertyUpdated(long j10, long j11, @NotNull String propertyName, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        Intrinsics.checkNotNullParameter(value, "value");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, value, this._enumPropertyFlow);
    }

    @Keep
    public final void onEnumsListed(long j10, @NotNull List<File.Enum> enums) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(enums, "enums");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(enums));
        }
    }

    @Keep
    public final void onFileError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("File error: " + error))));
        }
    }

    @Keep
    public final void onFileLoaded(long j10, long j11) {
        CancellableContinuation cancellableContinuation;
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(FileHandle.m165boximpl(j11)));
        }
    }

    @Keep
    public final void onFontDecoded(long j10, long j11) {
        CancellableContinuation cancellableContinuation;
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(FontHandle.m172boximpl(j11)));
        }
    }

    @Keep
    public final void onFontError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("Failed to decode font: " + error))));
        }
    }

    @Keep
    public final void onImageDecoded(long j10, long j11) {
        CancellableContinuation cancellableContinuation;
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(ImageHandle.m179boximpl(j11)));
        }
    }

    @Keep
    public final void onImageError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("Failed to decode image: " + error))));
        }
    }

    @Keep
    public final void onNumberPropertyUpdated(long j10, long j11, @NotNull String propertyName, float f10) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, Float.valueOf(f10), this._numberPropertyFlow);
    }

    @Keep
    public final void onStateMachineError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("State machine error: " + error))));
        }
    }

    @Keep
    public final void onStateMachineSettled(long j10) {
        this._settledFlow.b(StateMachineHandle.m190boximpl(j10));
    }

    @Keep
    public final void onStateMachinesListed(long j10, @NotNull List<String> names) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(names, "names");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(names));
        }
    }

    @Keep
    public final void onStringPropertyUpdated(long j10, long j11, @NotNull String propertyName, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        Intrinsics.checkNotNullParameter(value, "value");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, value, this._stringPropertyFlow);
    }

    @Keep
    public final void onTriggerPropertyUpdated(long j10, long j11, @NotNull String propertyName) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        m107onPropertyUpdatedUrmHyfM(j10, j11, propertyName, Unit.f33282a, this._triggerPropertyFlow);
    }

    @Keep
    public final void onViewModelInstanceError(long j10, @NotNull String error) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(error, "error");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(c.a(new RuntimeException("View model instance error: " + error))));
        }
    }

    @Keep
    public final void onViewModelInstancesListed(long j10, @NotNull List<String> names) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(names, "names");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(names));
        }
    }

    @Keep
    public final void onViewModelPropertiesListed(long j10, @NotNull List<ViewModel.Property> properties) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(properties, "properties");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(properties));
        }
    }

    @Keep
    public final void onViewModelsListed(long j10, @NotNull List<String> names) {
        CancellableContinuation cancellableContinuation;
        Intrinsics.checkNotNullParameter(names, "names");
        CancellableContinuation remove = this.pendingContinuations.remove(Long.valueOf(j10));
        if (remove instanceof Continuation) {
            cancellableContinuation = remove;
        } else {
            cancellableContinuation = null;
        }
        if (cancellableContinuation != null) {
            cancellableContinuation.resumeWith(Result.b(names));
        }
    }

    /* renamed from: pointerDown-OV3vCas  reason: not valid java name */
    public final void m139pointerDownOV3vCas(long j10, @NotNull Fit fit, @NotNull Alignment alignment, float f10, float f11, int i10, float f12, float f13) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        cppPointerDown(this.cppPointer.getPointer(), j10, fit, alignment, f10, f11, i10, f12, f13);
    }

    /* renamed from: pointerExit-OV3vCas  reason: not valid java name */
    public final void m140pointerExitOV3vCas(long j10, @NotNull Fit fit, @NotNull Alignment alignment, float f10, float f11, int i10, float f12, float f13) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        cppPointerExit(this.cppPointer.getPointer(), j10, fit, alignment, f10, f11, i10, f12, f13);
    }

    /* renamed from: pointerMove-OV3vCas  reason: not valid java name */
    public final void m141pointerMoveOV3vCas(long j10, @NotNull Fit fit, @NotNull Alignment alignment, float f10, float f11, int i10, float f12, float f13) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        cppPointerMove(this.cppPointer.getPointer(), j10, fit, alignment, f10, f11, i10, f12, f13);
    }

    /* renamed from: pointerUp-OV3vCas  reason: not valid java name */
    public final void m142pointerUpOV3vCas(long j10, @NotNull Fit fit, @NotNull Alignment alignment, float f10, float f11, int i10, float f12, float f13) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        cppPointerUp(this.cppPointer.getPointer(), j10, fit, alignment, f10, f11, i10, f12, f13);
    }

    public final void pollMessages() {
        cppPollMessages(this.cppPointer.getPointer());
    }

    /* renamed from: registerAudio-4kKS7jM  reason: not valid java name */
    public final void m143registerAudio4kKS7jM(@NotNull String name, long j10) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppRegisterAudio(this.cppPointer.getPointer(), name, j10);
    }

    /* renamed from: registerFont-8-RWjZU  reason: not valid java name */
    public final void m144registerFont8RWjZU(@NotNull String name, long j10) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppRegisterFont(this.cppPointer.getPointer(), name, j10);
    }

    /* renamed from: registerImage-QieQ09U  reason: not valid java name */
    public final void m145registerImageQieQ09U(@NotNull String name, long j10) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppRegisterImage(this.cppPointer.getPointer(), name, j10);
    }

    public final void release(@NotNull String source, @NotNull String reason) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(reason, "reason");
        this.cppPointer.release(source, reason);
    }

    /* renamed from: setBooleanProperty-iFQtAB8  reason: not valid java name */
    public final void m146setBooleanPropertyiFQtAB8(long j10, @NotNull String propertyPath, boolean z10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        cppSetBooleanProperty(this.cppPointer.getPointer(), j10, propertyPath, z10);
    }

    /* renamed from: setColorProperty-iFQtAB8  reason: not valid java name */
    public final void m147setColorPropertyiFQtAB8(long j10, @NotNull String propertyPath, int i10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        cppSetColorProperty(this.cppPointer.getPointer(), j10, propertyPath, i10);
    }

    /* renamed from: setEnumProperty-iFQtAB8  reason: not valid java name */
    public final void m148setEnumPropertyiFQtAB8(long j10, @NotNull String propertyPath, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Intrinsics.checkNotNullParameter(value, "value");
        cppSetEnumProperty(this.cppPointer.getPointer(), j10, propertyPath, value);
    }

    /* renamed from: setNumberProperty-iFQtAB8  reason: not valid java name */
    public final void m149setNumberPropertyiFQtAB8(long j10, @NotNull String propertyPath, float f10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        cppSetNumberProperty(this.cppPointer.getPointer(), j10, propertyPath, f10);
    }

    /* renamed from: setStringProperty-iFQtAB8  reason: not valid java name */
    public final void m150setStringPropertyiFQtAB8(long j10, @NotNull String propertyPath, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Intrinsics.checkNotNullParameter(value, "value");
        cppSetStringProperty(this.cppPointer.getPointer(), j10, propertyPath, value);
    }

    /* renamed from: subscribeToProperty-iFQtAB8  reason: not valid java name */
    public final void m151subscribeToPropertyiFQtAB8(long j10, @NotNull String propertyPath, @NotNull ViewModel.PropertyDataType propertyType) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Intrinsics.checkNotNullParameter(propertyType, "propertyType");
        cppSubscribeToProperty(this.cppPointer.getPointer(), j10, propertyPath, propertyType.getValue());
    }

    public final void unregisterAudio(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppUnregisterAudio(this.cppPointer.getPointer(), name);
    }

    public final void unregisterFont(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppUnregisterFont(this.cppPointer.getPointer(), name);
    }

    public final void unregisterImage(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        cppUnregisterImage(this.cppPointer.getPointer(), name);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [androidx.lifecycle.o, app.rive.core.CommandQueue$withLifecycle$observer$1] */
    /* JADX WARN: Type inference failed for: r2v0, types: [T, app.rive.core.CloseOnce] */
    @NotNull
    public final AutoCloseable withLifecycle(@NotNull final LifecycleOwner owner, @NotNull final String source) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        Intrinsics.checkNotNullParameter(source, "source");
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        final ?? r12 = new DefaultLifecycleObserver() { // from class: app.rive.core.CommandQueue$withLifecycle$observer$1
            @Override // androidx.lifecycle.DefaultLifecycleObserver
            public void onDestroy(@NotNull LifecycleOwner owner2) {
                CloseOnce closeOnce;
                Intrinsics.checkNotNullParameter(owner2, "owner");
                CloseOnce closeOnce2 = objectRef.element;
                if (closeOnce2 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("onClose");
                    closeOnce = null;
                } else {
                    closeOnce = closeOnce2;
                }
                closeOnce.close();
            }
        };
        objectRef.element = new CloseOnce(new Function0<Unit>() { // from class: app.rive.core.CommandQueue$withLifecycle$1
            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m156invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m156invoke() {
                RCPointer rCPointer;
                LifecycleOwner.this.getLifecycle().d(r12);
                rCPointer = this.cppPointer;
                rCPointer.release(source, "Closed by withLifecycle");
            }
        });
        owner.getLifecycle().a(r12);
        T t10 = objectRef.element;
        if (t10 == 0) {
            Intrinsics.throwUninitializedPropertyAccessException("onClose");
            return null;
        }
        return (CloseOnce) t10;
    }
}
