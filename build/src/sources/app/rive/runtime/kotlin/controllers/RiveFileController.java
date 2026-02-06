package app.rive.runtime.kotlin.controllers;

import android.graphics.PointF;
import android.graphics.RectF;
import android.util.Log;
import app.rive.runtime.kotlin.ChangedInput;
import app.rive.runtime.kotlin.Observable;
import app.rive.runtime.kotlin.RiveAnimationView;
import app.rive.runtime.kotlin.core.AdvanceResult;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Artboard;
import app.rive.runtime.kotlin.core.Direction;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.Helpers;
import app.rive.runtime.kotlin.core.LayerState;
import app.rive.runtime.kotlin.core.LinearAnimationInstance;
import app.rive.runtime.kotlin.core.Loop;
import app.rive.runtime.kotlin.core.PlayableInstance;
import app.rive.runtime.kotlin.core.RefCount;
import app.rive.runtime.kotlin.core.RiveEvent;
import app.rive.runtime.kotlin.core.SMIBoolean;
import app.rive.runtime.kotlin.core.SMIInput;
import app.rive.runtime.kotlin.core.SMINumber;
import app.rive.runtime.kotlin.core.SMITrigger;
import app.rive.runtime.kotlin.core.StateMachineInstance;
import app.rive.runtime.kotlin.core.ViewModelInstance;
import app.rive.runtime.kotlin.renderers.PointerEvents;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0094\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010#\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0007\n\u0002\b\u0019\n\u0002\u0010\"\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u001e\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\b\b\u0017\u0018\u0000 à\u00012\b\u0012\u0004\u0012\u00020\u00020\u00012\u00020\u0003:\u0006à\u0001á\u0001â\u0001BK\b\u0016\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\u0016\b\u0002\u0010\f\u001a\u0010\u0012\u0004\u0012\u00020\u000e\u0018\u00010\rj\u0004\u0018\u0001`\u000f¢\u0006\u0002\u0010\u0010B[\b\u0000\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\u0016\b\u0002\u0010\f\u001a\u0010\u0012\u0004\u0012\u00020\u000e\u0018\u00010\rj\u0004\u0018\u0001`\u000f\u0012\u000e\b\u0002\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u0012¢\u0006\u0002\u0010\u0014J\u0012\u0010\u0088\u0001\u001a\u00020\u000e2\u0007\u0010\u0089\u0001\u001a\u00020\u0017H\u0016J\u0012\u0010\u008a\u0001\u001a\u00020\u000e2\u0007\u0010\u008b\u0001\u001a\u00020JH\u0017J\u0018\u0010)\u001a\b\u0012\u0004\u0012\u00020&0(2\b\u0010\u008c\u0001\u001a\u00030\u008d\u0001H\u0012J\u001f\u0010)\u001a\b\u0012\u0004\u0012\u00020&0(2\u000f\u0010\u008e\u0001\u001a\n\u0012\u0005\u0012\u00030\u008d\u00010\u008f\u0001H\u0012J\b\u0010\u0006\u001a\u00020\u000eH\u0016J+\u0010\u0090\u0001\u001a\u00020\u000e2\b\u0010\u0091\u0001\u001a\u00030\u008d\u00012\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\f\b\u0002\u0010\u0093\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0016J\u001d\u0010\u0094\u0001\u001a\u00020\u000e2\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\b\u0010\u0093\u0001\u001a\u00030\u008d\u0001H\u0016J\u0019\u0010\u0095\u0001\u001a\b\u0012\u0004\u0012\u00020h0(2\b\u0010\u008c\u0001\u001a\u00030\u008d\u0001H\u0012J\u0016\u0010\u0096\u0001\u001a\u0005\u0018\u00010\u008d\u00012\b\u0010\u0097\u0001\u001a\u00030\u008d\u0001H\u0016J \u0010\u0096\u0001\u001a\u0005\u0018\u00010\u008d\u00012\b\u0010\u0097\u0001\u001a\u00030\u008d\u00012\b\u0010\u0093\u0001\u001a\u00030\u008d\u0001H\u0016J\u0010\u0010\u0098\u0001\u001a\u0004\u0018\u00010JH\u0016¢\u0006\u0002\u0010MJ\u0012\u0010\u0099\u0001\u001a\u00020\u000e2\u0007\u0010\u008b\u0001\u001a\u00020JH\u0013J\u0013\u0010\u009a\u0001\u001a\u00020\u000e2\b\u0010\u009b\u0001\u001a\u00030\u009c\u0001H\u0012J\u0013\u0010\u009d\u0001\u001a\u00020\u000e2\b\u0010\u009e\u0001\u001a\u00030\u009f\u0001H\u0012J\u0013\u0010 \u0001\u001a\u00020\u000e2\b\u0010\u009e\u0001\u001a\u00030\u009f\u0001H\u0012J\u0013\u0010¡\u0001\u001a\u00020\u000e2\b\u0010\u009e\u0001\u001a\u00030\u009f\u0001H\u0012J\u001c\u0010¢\u0001\u001a\u00020\u000e2\u0007\u0010£\u0001\u001a\u00020h2\b\u0010¤\u0001\u001a\u00030¥\u0001H\u0012J\u0013\u0010¦\u0001\u001a\u00020\u000e2\b\u0010\u009e\u0001\u001a\u00030\u009f\u0001H\u0012J\t\u0010§\u0001\u001a\u00020\u000eH\u0016J\u0012\u0010§\u0001\u001a\u00020\u000e2\u0007\u0010¨\u0001\u001a\u00020&H\u0012J\u0012\u0010§\u0001\u001a\u00020\u000e2\u0007\u0010£\u0001\u001a\u00020hH\u0012J\u001e\u0010§\u0001\u001a\u00020\u000e2\b\u0010\u008c\u0001\u001a\u00030\u008d\u00012\t\b\u0002\u0010©\u0001\u001a\u00020\u0007H\u0016J$\u0010§\u0001\u001a\u00020\u000e2\u000e\u0010\u008e\u0001\u001a\t\u0012\u0005\u0012\u00030\u008d\u00010(2\t\b\u0002\u0010ª\u0001\u001a\u00020\u0007H\u0016J*\u0010«\u0001\u001a\u00020\u000e2\u0007\u0010¬\u0001\u001a\u00020&2\u0006\u0010\u0004\u001a\u00020\u00052\b\u0010\u00ad\u0001\u001a\u00030®\u0001H\u0010¢\u0006\u0003\b¯\u0001J*\u0010«\u0001\u001a\u00020\u000e2\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u00ad\u0001\u001a\u00030®\u00012\t\b\u0002\u0010°\u0001\u001a\u00020\u0007H\u0016J#\u0010«\u0001\u001a\u00020\u000e2\u0007\u0010±\u0001\u001a\u00020h2\t\b\u0002\u0010²\u0001\u001a\u00020\u0007H\u0010¢\u0006\u0003\b¯\u0001J?\u0010«\u0001\u001a\u00020\u000e2\b\u0010\u008c\u0001\u001a\u00030\u008d\u00012\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u00ad\u0001\u001a\u00030®\u00012\t\b\u0002\u0010©\u0001\u001a\u00020\u00072\t\b\u0002\u0010°\u0001\u001a\u00020\u0007H\u0016JE\u0010«\u0001\u001a\u00020\u000e2\u000e\u0010\u008e\u0001\u001a\t\u0012\u0005\u0012\u00030\u008d\u00010(2\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u00ad\u0001\u001a\u00030®\u00012\t\b\u0002\u0010ª\u0001\u001a\u00020\u00072\t\b\u0002\u0010°\u0001\u001a\u00020\u0007H\u0016J?\u0010³\u0001\u001a\u00020\u000e2\b\u0010\u008c\u0001\u001a\u00030\u008d\u00012\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u00ad\u0001\u001a\u00030®\u00012\t\b\u0002\u0010©\u0001\u001a\u00020\u00072\t\b\u0002\u0010°\u0001\u001a\u00020\u0007H\u0012J/\u0010´\u0001\u001a\u00020\u000e2\b\u0010µ\u0001\u001a\u00030¶\u00012\b\u0010·\u0001\u001a\u00030¸\u00012\u0007\u0010¹\u0001\u001a\u00020J2\u0007\u0010º\u0001\u001a\u00020JH\u0016J\t\u0010»\u0001\u001a\u00020\u000eH\u0013J8\u0010¼\u0001\u001a\u00020\u000e2\b\u0010\u0091\u0001\u001a\u00030\u008d\u00012\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\u000b\b\u0002\u0010\u0019\u001a\u0005\u0018\u00010½\u00012\f\b\u0002\u0010\u0093\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0012J(\u0010¾\u0001\u001a\u00020\u000e2\u0014\u0010¿\u0001\u001a\u000b\u0012\u0006\b\u0001\u0012\u00020\u00130À\u0001\"\u00020\u0013H\u0010¢\u0006\u0006\bÁ\u0001\u0010Â\u0001J\u0012\u0010Ã\u0001\u001a\u00020\u000e2\u0007\u0010\u0089\u0001\u001a\u00020\u0002H\u0016J\n\u0010Ä\u0001\u001a\u00030¸\u0001H\u0016J\u0012\u0010Å\u0001\u001a\u00020\u000e2\u0007\u0010\u0089\u0001\u001a\u00020\u0017H\u0016J\u000f\u0010Æ\u0001\u001a\u00020\u000eH\u0010¢\u0006\u0003\bÇ\u0001J\u001b\u0010È\u0001\u001a\u00020\u00072\u0007\u0010±\u0001\u001a\u00020h2\u0007\u0010\u008b\u0001\u001a\u00020JH\u0012J\u0013\u0010É\u0001\u001a\u00020\u000e2\b\u0010¤\u0001\u001a\u00030Ê\u0001H\u0017J\f\u0010Ë\u0001\u001a\u0005\u0018\u00010Ê\u0001H\u0017J\u0017\u0010Ì\u0001\u001a\u00020\u000e2\f\b\u0002\u0010Í\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0016J\u0012\u0010Î\u0001\u001a\u00020\u000e2\u0007\u0010Ï\u0001\u001a\u00020\u000bH\u0012J3\u0010Ð\u0001\u001a\u00020\u000e2\b\u0010\u0091\u0001\u001a\u00030\u008d\u00012\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\u0006\u0010\u0019\u001a\u00020\u00072\f\b\u0002\u0010\u0093\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0016J%\u0010Ñ\u0001\u001a\u00020\u000e2\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\u0006\u0010\u0019\u001a\u00020\u00072\b\u0010\u0093\u0001\u001a\u00030\u008d\u0001H\u0016J3\u0010Ò\u0001\u001a\u00020\u000e2\b\u0010\u0091\u0001\u001a\u00030\u008d\u00012\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\u0006\u0010\u0019\u001a\u00020J2\f\b\u0002\u0010\u0093\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0016J%\u0010Ó\u0001\u001a\u00020\u000e2\b\u0010\u0092\u0001\u001a\u00030\u008d\u00012\u0006\u0010\u0019\u001a\u00020J2\b\u0010\u0093\u0001\u001a\u00030\u008d\u0001H\u0016J\u001f\u0010Ô\u0001\u001a\u00020\u000e2\u0006\u0010\b\u001a\u00020\t2\f\b\u0002\u0010Õ\u0001\u001a\u0005\u0018\u00010\u008d\u0001H\u0016J\u001d\u0010Ö\u0001\u001a\u00020\u000e2\b\u0010\u0097\u0001\u001a\u00030\u008d\u00012\b\u0010×\u0001\u001a\u00030\u008d\u0001H\u0016J'\u0010Ö\u0001\u001a\u00020\u000e2\b\u0010\u0097\u0001\u001a\u00030\u008d\u00012\b\u0010×\u0001\u001a\u00030\u008d\u00012\b\u0010\u0093\u0001\u001a\u00030\u008d\u0001H\u0016J\u0011\u0010Ø\u0001\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020JH\u0016J\u0019\u0010Ù\u0001\u001a\u00020\u000e2\b\u0010Ú\u0001\u001a\u00030Û\u0001H\u0010¢\u0006\u0003\bÜ\u0001J\u0019\u0010\u0081\u0001\u001a\b\u0012\u0004\u0012\u00020h0(2\b\u0010\u008c\u0001\u001a\u00030\u008d\u0001H\u0012J \u0010\u0081\u0001\u001a\b\u0012\u0004\u0012\u00020h0(2\u000f\u0010\u008e\u0001\u001a\n\u0012\u0005\u0012\u00030\u008d\u00010\u008f\u0001H\u0012J\u0012\u0010Ý\u0001\u001a\u00020\u000e2\u0007\u0010¨\u0001\u001a\u00020&H\u0012J\u0012\u0010Ý\u0001\u001a\u00020\u000e2\u0007\u0010£\u0001\u001a\u00020hH\u0012J\t\u0010Þ\u0001\u001a\u00020\u000eH\u0016J\u001e\u0010Þ\u0001\u001a\u00020\u000e2\b\u0010\u008c\u0001\u001a\u00030\u008d\u00012\t\b\u0002\u0010©\u0001\u001a\u00020\u0007H\u0016J$\u0010Þ\u0001\u001a\u00020\u000e2\u000e\u0010\u008e\u0001\u001a\t\u0012\u0005\u0012\u00030\u008d\u00010(2\t\b\u0002\u0010ª\u0001\u001a\u00020\u0007H\u0016J\u0012\u0010ß\u0001\u001a\u00020\u000e2\u0007\u0010\u0089\u0001\u001a\u00020\u0002H\u0016R\u0014\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00170\u0016X\u0092\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00020\u0016X\u0092\u000e¢\u0006\u0002\n\u0000R(\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\u0010\u0019\u001a\u0004\u0018\u00010\u000b@VX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001a\u0010\u001b\"\u0004\b\u001c\u0010\u001dR$\u0010\u001f\u001a\u00020\u001e2\u0006\u0010\u0019\u001a\u00020\u001e@VX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b \u0010!\"\u0004\b\"\u0010#R2\u0010$\u001a&\u0012\f\u0012\n '*\u0004\u0018\u00010&0& '*\u0012\u0012\f\u0012\n '*\u0004\u0018\u00010&0&\u0018\u00010(0%X\u0092\u000e¢\u0006\u0002\n\u0000R\u001a\u0010)\u001a\b\u0012\u0004\u0012\u00020&0(8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b*\u0010+R\u0014\u0010,\u001a\u00020-8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b.\u0010/R\u001a\u0010\u0006\u001a\u00020\u0007X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b0\u00101\"\u0004\b2\u00103R\u001c\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00130\u00128\u0011X\u0090\u0004¢\u0006\b\n\u0000\u001a\u0004\b4\u00105R*\u00106\u001a\u0012\u0012\u0004\u0012\u00020\u001707j\b\u0012\u0004\u0012\u00020\u0017`88VX\u0097\u0004¢\u0006\f\u0012\u0004\b9\u0010:\u001a\u0004\b;\u0010<R(\u0010\b\u001a\u0004\u0018\u00010\t2\b\u0010\u0019\u001a\u0004\u0018\u00010\t@VX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b=\u0010>\"\u0004\b?\u0010@R$\u0010B\u001a\u00020A2\u0006\u0010\u0019\u001a\u00020A@VX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bC\u0010D\"\u0004\bE\u0010FR\u001a\u0010G\u001a\u00020\u0007X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bG\u00101\"\u0004\bH\u00103R\u0014\u0010I\u001a\u00020\u00078VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bI\u00101R*\u0010K\u001a\u0004\u0018\u00010J2\b\u0010\u0019\u001a\u0004\u0018\u00010J@VX\u0096\u000e¢\u0006\u0010\n\u0002\u0010P\u001a\u0004\bL\u0010M\"\u0004\bN\u0010OR\u0014\u0010Q\u001a\u00020J8PX\u0090\u0004¢\u0006\u0006\u001a\u0004\bR\u0010SR$\u0010T\u001a\u00020J2\u0006\u0010\u0019\u001a\u00020J@PX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bU\u0010S\"\u0004\bV\u0010WR*\u0010X\u001a\u0012\u0012\u0004\u0012\u00020\u000207j\b\u0012\u0004\u0012\u00020\u0002`88VX\u0097\u0004¢\u0006\f\u0012\u0004\bY\u0010:\u001a\u0004\bZ\u0010<R\u001a\u0010\u0004\u001a\u00020\u0005X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b[\u0010\\\"\u0004\b]\u0010^R(\u0010\f\u001a\u0010\u0012\u0004\u0012\u00020\u000e\u0018\u00010\rj\u0004\u0018\u0001`\u000fX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b_\u0010`\"\u0004\ba\u0010bR\u001a\u0010c\u001a\b\u0012\u0004\u0012\u00020&0d8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\be\u0010fR\u001a\u0010g\u001a\b\u0012\u0004\u0012\u00020h0d8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bi\u0010fR2\u0010j\u001a&\u0012\f\u0012\n '*\u0004\u0018\u00010&0& '*\u0012\u0012\f\u0012\n '*\u0004\u0018\u00010&0&\u0018\u00010d0\u0016X\u0092\u000e¢\u0006\u0002\n\u0000R$\u0010k\u001a\u0012\u0012\u0004\u0012\u00020&07j\b\u0012\u0004\u0012\u00020&`88VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bl\u0010<R2\u0010m\u001a&\u0012\f\u0012\n '*\u0004\u0018\u00010h0h '*\u0012\u0012\f\u0012\n '*\u0004\u0018\u00010h0h\u0018\u00010d0\u0016X\u0092\u000e¢\u0006\u0002\n\u0000R$\u0010n\u001a\u0012\u0012\u0004\u0012\u00020h07j\b\u0012\u0004\u0012\u00020h`88VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bo\u0010<R\u001a\u0010p\u001a\u00020qX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\br\u0010s\"\u0004\bt\u0010uR\u001a\u0010v\u001a\u00020wX\u0090\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bx\u0010y\"\u0004\bz\u0010{R\u0014\u0010|\u001a\u00020}X\u0090\u0004¢\u0006\b\n\u0000\u001a\u0004\b~\u0010\u007fR3\u0010\u0080\u0001\u001a&\u0012\f\u0012\n '*\u0004\u0018\u00010h0h '*\u0012\u0012\f\u0012\n '*\u0004\u0018\u00010h0h\u0018\u00010(0%X\u0092\u000e¢\u0006\u0002\n\u0000R\u001c\u0010\u0081\u0001\u001a\b\u0012\u0004\u0012\u00020h0(8VX\u0096\u0004¢\u0006\u0007\u001a\u0005\b\u0082\u0001\u0010+R\u001e\u0010\u0083\u0001\u001a\u00020-X\u0096\u000e¢\u0006\u0011\n\u0000\u001a\u0005\b\u0084\u0001\u0010/\"\u0006\b\u0085\u0001\u0010\u0086\u0001R\u0013\u0010\u0087\u0001\u001a\u0004\u0018\u00010JX\u0092\u000e¢\u0006\u0004\n\u0002\u0010P¨\u0006ã\u0001"}, d2 = {"Lapp/rive/runtime/kotlin/controllers/RiveFileController;", "Lapp/rive/runtime/kotlin/Observable;", "Lapp/rive/runtime/kotlin/controllers/RiveFileController$Listener;", "Lapp/rive/runtime/kotlin/core/RefCount;", "loop", "Lapp/rive/runtime/kotlin/core/Loop;", "autoplay", "", "file", "Lapp/rive/runtime/kotlin/core/File;", "activeArtboard", "Lapp/rive/runtime/kotlin/core/Artboard;", "onStart", "Lkotlin/Function0;", "", "Lapp/rive/runtime/kotlin/controllers/OnStartCallback;", "(Lapp/rive/runtime/kotlin/core/Loop;ZLapp/rive/runtime/kotlin/core/File;Lapp/rive/runtime/kotlin/core/Artboard;Lkotlin/jvm/functions/Function0;)V", "changedInputs", "Ljava/util/concurrent/ConcurrentLinkedQueue;", "Lapp/rive/runtime/kotlin/ChangedInput;", "(Lapp/rive/runtime/kotlin/core/Loop;ZLapp/rive/runtime/kotlin/core/File;Lapp/rive/runtime/kotlin/core/Artboard;Lkotlin/jvm/functions/Function0;Ljava/util/concurrent/ConcurrentLinkedQueue;)V", "_eventListeners", "", "Lapp/rive/runtime/kotlin/controllers/RiveFileController$RiveEventListener;", "_listeners", "value", "getActiveArtboard", "()Lapp/rive/runtime/kotlin/core/Artboard;", "setActiveArtboard", "(Lapp/rive/runtime/kotlin/core/Artboard;)V", "Lapp/rive/runtime/kotlin/core/Alignment;", "alignment", "getAlignment", "()Lapp/rive/runtime/kotlin/core/Alignment;", "setAlignment", "(Lapp/rive/runtime/kotlin/core/Alignment;)V", "animationList", "", "Lapp/rive/runtime/kotlin/core/LinearAnimationInstance;", "kotlin.jvm.PlatformType", "", "animations", "getAnimations", "()Ljava/util/List;", "artboardBounds", "Landroid/graphics/RectF;", "getArtboardBounds", "()Landroid/graphics/RectF;", "getAutoplay", "()Z", "setAutoplay", "(Z)V", "getChangedInputs$kotlin_release", "()Ljava/util/concurrent/ConcurrentLinkedQueue;", "eventListeners", "Ljava/util/HashSet;", "Lkotlin/collections/HashSet;", "getEventListeners$annotations", "()V", "getEventListeners", "()Ljava/util/HashSet;", "getFile", "()Lapp/rive/runtime/kotlin/core/File;", "setFile", "(Lapp/rive/runtime/kotlin/core/File;)V", "Lapp/rive/runtime/kotlin/core/Fit;", "fit", "getFit", "()Lapp/rive/runtime/kotlin/core/Fit;", "setFit", "(Lapp/rive/runtime/kotlin/core/Fit;)V", "isActive", "setActive", "isAdvancing", "", "layoutScaleFactor", "getLayoutScaleFactor", "()Ljava/lang/Float;", "setLayoutScaleFactor", "(Ljava/lang/Float;)V", "Ljava/lang/Float;", "layoutScaleFactorActive", "getLayoutScaleFactorActive$kotlin_release", "()F", "layoutScaleFactorAutomatic", "getLayoutScaleFactorAutomatic", "setLayoutScaleFactorAutomatic$kotlin_release", "(F)V", "listeners", "getListeners$annotations", "getListeners", "getLoop", "()Lapp/rive/runtime/kotlin/core/Loop;", "setLoop", "(Lapp/rive/runtime/kotlin/core/Loop;)V", "getOnStart", "()Lkotlin/jvm/functions/Function0;", "setOnStart", "(Lkotlin/jvm/functions/Function0;)V", "pausedAnimations", "", "getPausedAnimations", "()Ljava/util/Set;", "pausedStateMachines", "Lapp/rive/runtime/kotlin/core/StateMachineInstance;", "getPausedStateMachines", "playingAnimationSet", "playingAnimations", "getPlayingAnimations", "playingStateMachineSet", "playingStateMachines", "getPlayingStateMachines", "refs", "Ljava/util/concurrent/atomic/AtomicInteger;", "getRefs", "()Ljava/util/concurrent/atomic/AtomicInteger;", "setRefs", "(Ljava/util/concurrent/atomic/AtomicInteger;)V", "requireArtboardResize", "Ljava/util/concurrent/atomic/AtomicBoolean;", "getRequireArtboardResize$kotlin_release", "()Ljava/util/concurrent/atomic/AtomicBoolean;", "setRequireArtboardResize$kotlin_release", "(Ljava/util/concurrent/atomic/AtomicBoolean;)V", "startStopLock", "Ljava/util/concurrent/locks/ReentrantLock;", "getStartStopLock$kotlin_release", "()Ljava/util/concurrent/locks/ReentrantLock;", "stateMachineList", "stateMachines", "getStateMachines", "targetBounds", "getTargetBounds", "setTargetBounds", "(Landroid/graphics/RectF;)V", "userSetVolume", "addEventListener", "listener", "advance", "elapsed", "animationName", "", "animationNames", "", "fireState", "stateMachineName", "inputName", "path", "fireStateAtPath", "getOrCreateStateMachines", "getTextRunValue", "textRunName", "getVolume", "notifyAdvance", "notifyEvent", "event", "Lapp/rive/runtime/kotlin/core/RiveEvent;", "notifyLoop", "playableInstance", "Lapp/rive/runtime/kotlin/core/PlayableInstance;", "notifyPause", "notifyPlay", "notifyStateChanged", "stateMachine", "state", "Lapp/rive/runtime/kotlin/core/LayerState;", "notifyStop", "pause", "animation", "isStateMachine", "areStateMachines", "play", "animationInstance", "direction", "Lapp/rive/runtime/kotlin/core/Direction;", "play$kotlin_release", "settleInitialState", "stateMachineInstance", "settleStateMachineState", "playAnimation", "pointerEvent", "eventType", "Lapp/rive/runtime/kotlin/renderers/PointerEvents;", "pointerID", "", "x", "y", "processAllInputs", "queueInput", "", "queueInputs", "inputs", "", "queueInputs$kotlin_release", "([Lapp/rive/runtime/kotlin/ChangedInput;)V", "registerListener", "release", "removeEventListener", "reset", "reset$kotlin_release", "resolveStateMachineAdvance", "restoreControllerState", "Lapp/rive/runtime/kotlin/controllers/ControllerState;", "saveControllerState", "selectArtboard", StackTraceHelper.NAME_KEY, "setArtboard", "ab", "setBooleanState", "setBooleanStateAtPath", "setNumberState", "setNumberStateAtPath", "setRiveFile", "artboardName", "setTextRunValue", "textValue", "setVolume", "setupScene", "rendererAttributes", "Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes;", "setupScene$kotlin_release", "stop", "stopAnimations", "unregisterListener", "Companion", "Listener", "RiveEventListener", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRiveFileController.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveFileController.kt\napp/rive/runtime/kotlin/controllers/RiveFileController\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,1082:1\n1#2:1083\n1#2:1108\n1863#3,2:1084\n1863#3,2:1086\n1863#3,2:1088\n1863#3,2:1090\n1863#3,2:1092\n1863#3,2:1094\n1863#3,2:1096\n1611#3,9:1098\n1863#3:1107\n1864#3:1109\n1620#3:1110\n1863#3,2:1111\n1863#3,2:1113\n1863#3,2:1115\n1863#3,2:1117\n1863#3,2:1119\n1863#3,2:1121\n1863#3,2:1123\n1863#3,2:1125\n1863#3,2:1127\n1863#3,2:1129\n1863#3,2:1131\n1863#3,2:1133\n1863#3,2:1135\n1863#3,2:1137\n1863#3,2:1139\n1863#3,2:1141\n1863#3,2:1143\n1863#3,2:1145\n1863#3,2:1147\n1863#3,2:1149\n1863#3,2:1151\n774#3:1153\n865#3,2:1154\n774#3:1156\n865#3,2:1157\n1863#3,2:1159\n1863#3,2:1161\n1863#3,2:1163\n1863#3,2:1165\n1863#3,2:1167\n1863#3,2:1169\n1863#3,2:1171\n1863#3,2:1173\n1863#3,2:1175\n1863#3,2:1177\n1863#3,2:1179\n1863#3,2:1181\n*S KotlinDebug\n*F\n+ 1 RiveFileController.kt\napp/rive/runtime/kotlin/controllers/RiveFileController\n*L\n374#1:1108\n295#1:1084,2\n296#1:1086,2\n297#1:1088,2\n298#1:1090,2\n323#1:1092,2\n355#1:1094,2\n370#1:1096,2\n374#1:1098,9\n374#1:1107\n374#1:1109\n374#1:1110\n375#1:1111,2\n459#1:1113,2\n487#1:1115,2\n525#1:1117,2\n528#1:1119,2\n556#1:1121,2\n557#1:1123,2\n562#1:1125,2\n564#1:1127,2\n570#1:1129,2\n572#1:1131,2\n580#1:1133,2\n585#1:1135,2\n591#1:1137,2\n593#1:1139,2\n599#1:1141,2\n601#1:1143,2\n649#1:1145,2\n673#1:1147,2\n742#1:1149,2\n755#1:1151,2\n780#1:1153\n780#1:1154,2\n784#1:1156\n784#1:1157,2\n808#1:1159,2\n811#1:1161,2\n826#1:1163,2\n832#1:1165,2\n930#1:1167,2\n1010#1:1169,2\n1014#1:1171,2\n1018#1:1173,2\n1022#1:1175,2\n1027#1:1177,2\n1031#1:1179,2\n1035#1:1181,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RiveFileController implements Observable<Listener>, RefCount {
    @NotNull
    public static final String TAG = "RiveFileController";
    @NotNull
    private Set<RiveEventListener> _eventListeners;
    @NotNull
    private Set<Listener> _listeners;
    private Artboard activeArtboard;
    @NotNull
    private Alignment alignment;
    private List<LinearAnimationInstance> animationList;
    private boolean autoplay;
    @NotNull
    private final ConcurrentLinkedQueue<ChangedInput> changedInputs;
    private File file;
    @NotNull
    private Fit fit;
    private boolean isActive;
    private Float layoutScaleFactor;
    private float layoutScaleFactorAutomatic;
    @NotNull
    private Loop loop;
    private Function0<Unit> onStart;
    private Set<LinearAnimationInstance> playingAnimationSet;
    private Set<StateMachineInstance> playingStateMachineSet;
    @NotNull
    private AtomicInteger refs;
    @NotNull
    private AtomicBoolean requireArtboardResize;
    @NotNull
    private final ReentrantLock startStopLock;
    private List<StateMachineInstance> stateMachineList;
    @NotNull
    private RectF targetBounds;
    private Float userSetVolume;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0005"}, d2 = {"Lapp/rive/runtime/kotlin/controllers/RiveFileController$Companion;", "", "()V", "TAG", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016J\u0010\u0010\u0006\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH&J\u0010\u0010\t\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH&J\u0010\u0010\n\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH&J\u0018\u0010\u000b\u001a\u00020\u00032\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\rH&J\u0010\u0010\u000f\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH&¨\u0006\u0010"}, d2 = {"Lapp/rive/runtime/kotlin/controllers/RiveFileController$Listener;", "", "notifyAdvance", "", "elapsed", "", "notifyLoop", "animation", "Lapp/rive/runtime/kotlin/core/PlayableInstance;", "notifyPause", "notifyPlay", "notifyStateChanged", "stateMachineName", "", "stateName", "notifyStop", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface Listener {

        @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class DefaultImpls {
            public static void notifyAdvance(@NotNull Listener listener, float f10) {
            }
        }

        void notifyAdvance(float f10);

        void notifyLoop(@NotNull PlayableInstance playableInstance);

        void notifyPause(@NotNull PlayableInstance playableInstance);

        void notifyPlay(@NotNull PlayableInstance playableInstance);

        void notifyStateChanged(@NotNull String str, @NotNull String str2);

        void notifyStop(@NotNull PlayableInstance playableInstance);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lapp/rive/runtime/kotlin/controllers/RiveFileController$RiveEventListener;", "", "notifyEvent", "", "event", "Lapp/rive/runtime/kotlin/core/RiveEvent;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface RiveEventListener {
        void notifyEvent(@NotNull RiveEvent riveEvent);
    }

    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[AdvanceResult.values().length];
            try {
                iArr[AdvanceResult.ONESHOT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AdvanceResult.LOOP.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[AdvanceResult.PINGPONG.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[AdvanceResult.ADVANCED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[AdvanceResult.NONE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[PointerEvents.values().length];
            try {
                iArr2[PointerEvents.POINTER_DOWN.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[PointerEvents.POINTER_UP.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[PointerEvents.POINTER_MOVE.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr2[PointerEvents.POINTER_EXIT.ordinal()] = 4;
            } catch (NoSuchFieldError unused9) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    public RiveFileController() {
        this(null, false, null, null, null, null, 63, null);
    }

    private List<LinearAnimationInstance> animations(String str) {
        return animations(CollectionsKt.e(str));
    }

    public static /* synthetic */ void fireState$default(RiveFileController riveFileController, String str, String str2, String str3, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                str3 = null;
            }
            riveFileController.fireState(str, str2, str3);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: fireState");
    }

    public static /* synthetic */ void getEventListeners$annotations() {
    }

    public static /* synthetic */ void getListeners$annotations() {
    }

    private List<StateMachineInstance> getOrCreateStateMachines(String str) {
        Artboard activeArtboard;
        List<StateMachineInstance> stateMachines = stateMachines(str);
        if (stateMachines.isEmpty() && (activeArtboard = getActiveArtboard()) != null) {
            StateMachineInstance stateMachine = activeArtboard.stateMachine(str);
            this.stateMachineList.add(stateMachine);
            return CollectionsKt.e(stateMachine);
        }
        return stateMachines;
    }

    private void notifyAdvance(float f10) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyAdvance(f10);
        }
    }

    private void notifyEvent(RiveEvent riveEvent) {
        for (RiveEventListener riveEventListener : CollectionsKt.h1(getEventListeners())) {
            riveEventListener.notifyEvent(riveEvent);
        }
    }

    private void notifyLoop(PlayableInstance playableInstance) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyLoop(playableInstance);
        }
    }

    private void notifyPause(PlayableInstance playableInstance) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyPause(playableInstance);
        }
    }

    private void notifyPlay(PlayableInstance playableInstance) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyPlay(playableInstance);
        }
    }

    private void notifyStateChanged(StateMachineInstance stateMachineInstance, LayerState layerState) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyStateChanged(stateMachineInstance.getName(), layerState.toString());
        }
    }

    private void notifyStop(PlayableInstance playableInstance) {
        for (Listener listener : CollectionsKt.h1(getListeners())) {
            listener.notifyStop(playableInstance);
        }
    }

    public static /* synthetic */ void pause$default(RiveFileController riveFileController, List list, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: pause");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveFileController.pause(list, z10);
    }

    public static /* synthetic */ void play$default(RiveFileController riveFileController, List list, Loop loop, Direction direction, boolean z10, boolean z11, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 2) != 0) {
            loop = Loop.AUTO;
        }
        Loop loop2 = loop;
        if ((i10 & 4) != 0) {
            direction = Direction.AUTO;
        }
        Direction direction2 = direction;
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        boolean z12 = z10;
        if ((i10 & 16) != 0) {
            z11 = true;
        }
        riveFileController.play(list, loop2, direction2, z12, z11);
    }

    public static /* synthetic */ void play$kotlin_release$default(RiveFileController riveFileController, StateMachineInstance stateMachineInstance, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                z10 = true;
            }
            riveFileController.play$kotlin_release(stateMachineInstance, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
    }

    private void playAnimation(String str, Loop loop, Direction direction, boolean z10, boolean z11) {
        Artboard activeArtboard;
        if (z10) {
            for (StateMachineInstance stateMachineInstance : getOrCreateStateMachines(str)) {
                play$kotlin_release(stateMachineInstance, z11);
            }
            return;
        }
        List<LinearAnimationInstance> animations = animations(str);
        for (LinearAnimationInstance linearAnimationInstance : animations) {
            play$kotlin_release(linearAnimationInstance, loop, direction);
        }
        if (animations.isEmpty() && (activeArtboard = getActiveArtboard()) != null) {
            play$kotlin_release(activeArtboard.animation(str), loop, direction);
        }
    }

    static /* synthetic */ void playAnimation$default(RiveFileController riveFileController, String str, Loop loop, Direction direction, boolean z10, boolean z11, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                loop = Loop.AUTO;
            }
            Loop loop2 = loop;
            if ((i10 & 4) != 0) {
                direction = Direction.AUTO;
            }
            Direction direction2 = direction;
            if ((i10 & 8) != 0) {
                z10 = false;
            }
            boolean z12 = z10;
            if ((i10 & 16) != 0) {
                z11 = true;
            }
            riveFileController.playAnimation(str, loop2, direction2, z12, z11);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: playAnimation");
    }

    private void processAllInputs() {
        ChangedInput poll;
        SMIInput sMIInput;
        LinkedHashSet<StateMachineInstance> linkedHashSet = new LinkedHashSet();
        while (!getChangedInputs$kotlin_release().isEmpty() && (poll = getChangedInputs$kotlin_release().poll()) != null) {
            if (poll.getNestedArtboardPath() == null) {
                for (StateMachineInstance stateMachineInstance : getOrCreateStateMachines(poll.getStateMachineName())) {
                    linkedHashSet.add(stateMachineInstance);
                    SMIInput input = stateMachineInstance.input(poll.getName());
                    if (input instanceof SMITrigger) {
                        ((SMITrigger) input).fire$kotlin_release();
                    } else if (input instanceof SMIBoolean) {
                        Object value = poll.getValue();
                        Intrinsics.checkNotNull(value, "null cannot be cast to non-null type kotlin.Boolean");
                        ((SMIBoolean) input).setValue$kotlin_release(((Boolean) value).booleanValue());
                    } else if (input instanceof SMINumber) {
                        Object value2 = poll.getValue();
                        Intrinsics.checkNotNull(value2, "null cannot be cast to non-null type kotlin.Float");
                        ((SMINumber) input).setValue$kotlin_release(((Float) value2).floatValue());
                    }
                }
            } else {
                Artboard activeArtboard = getActiveArtboard();
                if (activeArtboard != null) {
                    sMIInput = activeArtboard.input(poll.getName(), poll.getNestedArtboardPath());
                } else {
                    sMIInput = null;
                }
                if (sMIInput instanceof SMITrigger) {
                    ((SMITrigger) sMIInput).fire$kotlin_release();
                } else if (sMIInput instanceof SMIBoolean) {
                    Object value3 = poll.getValue();
                    Intrinsics.checkNotNull(value3, "null cannot be cast to non-null type kotlin.Boolean");
                    ((SMIBoolean) sMIInput).setValue$kotlin_release(((Boolean) value3).booleanValue());
                } else if (sMIInput instanceof SMINumber) {
                    Object value4 = poll.getValue();
                    Intrinsics.checkNotNull(value4, "null cannot be cast to non-null type kotlin.Float");
                    ((SMINumber) sMIInput).setValue$kotlin_release(((Float) value4).floatValue());
                }
            }
        }
        for (StateMachineInstance stateMachineInstance2 : linkedHashSet) {
            play$kotlin_release(stateMachineInstance2, false);
        }
    }

    private void queueInput(String str, String str2, Object obj, String str3) {
        queueInputs$kotlin_release(new ChangedInput(str, str2, obj, str3));
    }

    static /* synthetic */ void queueInput$default(RiveFileController riveFileController, String str, String str2, Object obj, String str3, int i10, Object obj2) {
        if (obj2 == null) {
            if ((i10 & 4) != 0) {
                obj = null;
            }
            if ((i10 & 8) != 0) {
                str3 = null;
            }
            riveFileController.queueInput(str, str2, obj, str3);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: queueInput");
    }

    private boolean resolveStateMachineAdvance(StateMachineInstance stateMachineInstance, float f10) {
        if (!getEventListeners().isEmpty()) {
            for (RiveEvent riveEvent : stateMachineInstance.getEventsReported()) {
                notifyEvent(riveEvent);
            }
        }
        boolean advance = stateMachineInstance.advance(f10);
        if (!getListeners().isEmpty()) {
            for (LayerState layerState : stateMachineInstance.getStatesChanged()) {
                notifyStateChanged(stateMachineInstance, layerState);
            }
        }
        return advance;
    }

    public static /* synthetic */ void selectArtboard$default(RiveFileController riveFileController, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                str = null;
            }
            riveFileController.selectArtboard(str);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: selectArtboard");
    }

    private void setArtboard(Artboard artboard) {
        if (Intrinsics.areEqual(artboard, getActiveArtboard())) {
            return;
        }
        stopAnimations();
        setActiveArtboard(artboard);
        autoplay();
    }

    public static /* synthetic */ void setBooleanState$default(RiveFileController riveFileController, String str, String str2, boolean z10, String str3, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 8) != 0) {
                str3 = null;
            }
            riveFileController.setBooleanState(str, str2, z10, str3);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setBooleanState");
    }

    public static /* synthetic */ void setNumberState$default(RiveFileController riveFileController, String str, String str2, float f10, String str3, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 8) != 0) {
                str3 = null;
            }
            riveFileController.setNumberState(str, str2, f10, str3);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setNumberState");
    }

    public static /* synthetic */ void setRiveFile$default(RiveFileController riveFileController, File file, String str, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                str = null;
            }
            riveFileController.setRiveFile(file, str);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setRiveFile");
    }

    private List<StateMachineInstance> stateMachines(String str) {
        return stateMachines(CollectionsKt.e(str));
    }

    private void stop(LinearAnimationInstance linearAnimationInstance) {
        this.playingAnimationSet.remove(linearAnimationInstance);
        if (this.animationList.remove(linearAnimationInstance)) {
            notifyStop(linearAnimationInstance);
        }
    }

    public static /* synthetic */ void stopAnimations$default(RiveFileController riveFileController, List list, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: stopAnimations");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveFileController.stopAnimations(list, z10);
    }

    @Override // app.rive.runtime.kotlin.core.RefCount
    public int acquire() {
        return RefCount.DefaultImpls.acquire(this);
    }

    public void addEventListener(@NotNull RiveEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (getStartStopLock$kotlin_release()) {
            this._eventListeners.add(listener);
        }
    }

    public void advance(float f10) {
        ReentrantLock lock;
        File file = getFile();
        if (file != null && (lock = file.getLock()) != null) {
            synchronized (lock) {
                try {
                    Artboard activeArtboard = getActiveArtboard();
                    if (activeArtboard != null) {
                        processAllInputs();
                        boolean z10 = false;
                        for (LinearAnimationInstance linearAnimationInstance : getAnimations()) {
                            if (getPlayingAnimations().contains(linearAnimationInstance)) {
                                AdvanceResult advanceAndGetResult = linearAnimationInstance.advanceAndGetResult(f10);
                                linearAnimationInstance.apply();
                                int i10 = WhenMappings.$EnumSwitchMapping$0[advanceAndGetResult.ordinal()];
                                if (i10 != 1) {
                                    if (i10 != 2 && i10 != 3) {
                                        if (i10 == 4) {
                                            z10 = getPlayingStateMachines().isEmpty();
                                        }
                                    } else {
                                        notifyLoop(linearAnimationInstance);
                                    }
                                } else {
                                    stop(linearAnimationInstance);
                                }
                            }
                        }
                        if (z10) {
                            activeArtboard.advance(f10);
                        }
                        ArrayList<StateMachineInstance> arrayList = new ArrayList();
                        for (StateMachineInstance stateMachineInstance : getStateMachines()) {
                            if (getPlayingStateMachines().contains(stateMachineInstance) && !resolveStateMachineAdvance(stateMachineInstance, f10)) {
                                arrayList.add(stateMachineInstance);
                            }
                        }
                        if (f10 > 0.0d) {
                            for (StateMachineInstance stateMachineInstance2 : arrayList) {
                                pause(stateMachineInstance2);
                            }
                        }
                        HashSet<StateMachineInstance> playingStateMachines = getPlayingStateMachines();
                        ArrayList<ViewModelInstance> arrayList2 = new ArrayList();
                        for (StateMachineInstance stateMachineInstance3 : playingStateMachines) {
                            ViewModelInstance viewModelInstance = stateMachineInstance3.getViewModelInstance();
                            if (viewModelInstance != null) {
                                arrayList2.add(viewModelInstance);
                            }
                        }
                        for (ViewModelInstance viewModelInstance2 : arrayList2) {
                            viewModelInstance2.pollChanges$kotlin_release();
                        }
                        notifyAdvance(f10);
                        Unit unit = Unit.f32008a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public void autoplay() {
        if (getAutoplay()) {
            play$default(this, null, null, true, 3, null);
            return;
        }
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            activeArtboard.advance(0.0f);
        }
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void fireState(@NotNull String stateMachineName, @NotNull String inputName, String str) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        queueInput$default(this, stateMachineName, inputName, null, str, 4, null);
    }

    public void fireStateAtPath(@NotNull String inputName, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        queueInput$default(this, "", inputName, null, path, 4, null);
    }

    public Artboard getActiveArtboard() {
        return this.activeArtboard;
    }

    @NotNull
    public Alignment getAlignment() {
        return this.alignment;
    }

    @NotNull
    public List<LinearAnimationInstance> getAnimations() {
        List<LinearAnimationInstance> h12;
        List<LinearAnimationInstance> animationList = this.animationList;
        Intrinsics.checkNotNullExpressionValue(animationList, "animationList");
        synchronized (animationList) {
            List<LinearAnimationInstance> animationList2 = this.animationList;
            Intrinsics.checkNotNullExpressionValue(animationList2, "animationList");
            h12 = CollectionsKt.h1(animationList2);
        }
        return h12;
    }

    @NotNull
    public RectF getArtboardBounds() {
        RectF bounds;
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null && (bounds = activeArtboard.getBounds()) != null) {
            return bounds;
        }
        return new RectF();
    }

    public boolean getAutoplay() {
        return this.autoplay;
    }

    @NotNull
    public ConcurrentLinkedQueue<ChangedInput> getChangedInputs$kotlin_release() {
        return this.changedInputs;
    }

    @NotNull
    public HashSet<RiveEventListener> getEventListeners() {
        HashSet<RiveEventListener> f12;
        synchronized (this._eventListeners) {
            f12 = CollectionsKt.f1(this._eventListeners);
        }
        return f12;
    }

    public File getFile() {
        return this.file;
    }

    @NotNull
    public Fit getFit() {
        return this.fit;
    }

    public Float getLayoutScaleFactor() {
        return this.layoutScaleFactor;
    }

    public float getLayoutScaleFactorActive$kotlin_release() {
        Float layoutScaleFactor = getLayoutScaleFactor();
        if (layoutScaleFactor != null) {
            return layoutScaleFactor.floatValue();
        }
        return getLayoutScaleFactorAutomatic();
    }

    public float getLayoutScaleFactorAutomatic() {
        return this.layoutScaleFactorAutomatic;
    }

    @NotNull
    public HashSet<Listener> getListeners() {
        HashSet<Listener> f12;
        synchronized (this._listeners) {
            f12 = CollectionsKt.f1(this._listeners);
        }
        return f12;
    }

    @NotNull
    public Loop getLoop() {
        return this.loop;
    }

    public Function0<Unit> getOnStart() {
        return this.onStart;
    }

    @NotNull
    public Set<LinearAnimationInstance> getPausedAnimations() {
        return CollectionsKt.X0(getAnimations(), getPlayingAnimations());
    }

    @NotNull
    public Set<StateMachineInstance> getPausedStateMachines() {
        return CollectionsKt.X0(getStateMachines(), getPlayingStateMachines());
    }

    @NotNull
    public HashSet<LinearAnimationInstance> getPlayingAnimations() {
        HashSet<LinearAnimationInstance> f12;
        Set<LinearAnimationInstance> playingAnimationSet = this.playingAnimationSet;
        Intrinsics.checkNotNullExpressionValue(playingAnimationSet, "playingAnimationSet");
        synchronized (playingAnimationSet) {
            Set<LinearAnimationInstance> playingAnimationSet2 = this.playingAnimationSet;
            Intrinsics.checkNotNullExpressionValue(playingAnimationSet2, "playingAnimationSet");
            f12 = CollectionsKt.f1(playingAnimationSet2);
        }
        return f12;
    }

    @NotNull
    public HashSet<StateMachineInstance> getPlayingStateMachines() {
        HashSet<StateMachineInstance> f12;
        Set<StateMachineInstance> playingStateMachineSet = this.playingStateMachineSet;
        Intrinsics.checkNotNullExpressionValue(playingStateMachineSet, "playingStateMachineSet");
        synchronized (playingStateMachineSet) {
            Set<StateMachineInstance> playingStateMachineSet2 = this.playingStateMachineSet;
            Intrinsics.checkNotNullExpressionValue(playingStateMachineSet2, "playingStateMachineSet");
            f12 = CollectionsKt.f1(playingStateMachineSet2);
        }
        return f12;
    }

    @Override // app.rive.runtime.kotlin.core.RefCount
    public int getRefCount() {
        return RefCount.DefaultImpls.getRefCount(this);
    }

    @Override // app.rive.runtime.kotlin.core.RefCount
    @NotNull
    public AtomicInteger getRefs() {
        return this.refs;
    }

    @NotNull
    public AtomicBoolean getRequireArtboardResize$kotlin_release() {
        return this.requireArtboardResize;
    }

    @NotNull
    public ReentrantLock getStartStopLock$kotlin_release() {
        return this.startStopLock;
    }

    @NotNull
    public List<StateMachineInstance> getStateMachines() {
        List<StateMachineInstance> h12;
        List<StateMachineInstance> stateMachineList = this.stateMachineList;
        Intrinsics.checkNotNullExpressionValue(stateMachineList, "stateMachineList");
        synchronized (stateMachineList) {
            List<StateMachineInstance> stateMachineList2 = this.stateMachineList;
            Intrinsics.checkNotNullExpressionValue(stateMachineList2, "stateMachineList");
            h12 = CollectionsKt.h1(stateMachineList2);
        }
        return h12;
    }

    @NotNull
    public RectF getTargetBounds() {
        return this.targetBounds;
    }

    public String getTextRunValue(@NotNull String textRunName) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            return activeArtboard.getTextRunValue(textRunName);
        }
        return null;
    }

    public Float getVolume() {
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            return Float.valueOf(activeArtboard.getVolume());
        }
        return null;
    }

    public boolean isActive() {
        return this.isActive;
    }

    public boolean isAdvancing() {
        Set<LinearAnimationInstance> playingAnimationSet = this.playingAnimationSet;
        Intrinsics.checkNotNullExpressionValue(playingAnimationSet, "playingAnimationSet");
        if (playingAnimationSet.isEmpty()) {
            Set<StateMachineInstance> playingStateMachineSet = this.playingStateMachineSet;
            Intrinsics.checkNotNullExpressionValue(playingStateMachineSet, "playingStateMachineSet");
            if (playingStateMachineSet.isEmpty() && getChangedInputs$kotlin_release().isEmpty()) {
                return false;
            }
            return true;
        }
        return true;
    }

    public void pause() {
        for (LinearAnimationInstance linearAnimationInstance : getPlayingAnimations()) {
            pause(linearAnimationInstance);
        }
        for (StateMachineInstance stateMachineInstance : getPlayingStateMachines()) {
            pause(stateMachineInstance);
        }
    }

    public void play(@NotNull List<String> animationNames, @NotNull Loop loop, @NotNull Direction direction, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        for (String str : animationNames) {
            playAnimation(str, loop, direction, z10, z11);
        }
    }

    public void play$kotlin_release(@NotNull StateMachineInstance stateMachineInstance, boolean z10) {
        Intrinsics.checkNotNullParameter(stateMachineInstance, "stateMachineInstance");
        if (!this.stateMachineList.contains(stateMachineInstance)) {
            this.stateMachineList.add(stateMachineInstance);
        }
        if (z10) {
            resolveStateMachineAdvance(stateMachineInstance, 0.0f);
        }
        synchronized (getStartStopLock$kotlin_release()) {
            this.playingStateMachineSet.add(stateMachineInstance);
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
        notifyPlay(stateMachineInstance);
    }

    public void pointerEvent(@NotNull PointerEvents eventType, int i10, float f10, float f11) {
        RectF rectF;
        Intrinsics.checkNotNullParameter(eventType, "eventType");
        Helpers helpers = Helpers.INSTANCE;
        RectF targetBounds = getTargetBounds();
        PointF pointF = new PointF(f10, f11);
        Fit fit = getFit();
        Alignment alignment = getAlignment();
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard == null || (rectF = activeArtboard.getBounds()) == null) {
            rectF = new RectF();
        }
        PointF convertToArtboardSpace = helpers.convertToArtboardSpace(targetBounds, pointF, fit, alignment, rectF, getLayoutScaleFactorActive$kotlin_release());
        for (StateMachineInstance stateMachineInstance : getStateMachines()) {
            int i11 = WhenMappings.$EnumSwitchMapping$1[eventType.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 == 4) {
                            stateMachineInstance.pointerExit(i10, convertToArtboardSpace.x, convertToArtboardSpace.y);
                        }
                    } else {
                        stateMachineInstance.pointerMove(i10, convertToArtboardSpace.x, convertToArtboardSpace.y);
                    }
                } else {
                    stateMachineInstance.pointerUp(i10, convertToArtboardSpace.x, convertToArtboardSpace.y);
                }
            } else {
                stateMachineInstance.pointerDown(i10, convertToArtboardSpace.x, convertToArtboardSpace.y);
            }
            play$kotlin_release(stateMachineInstance, false);
        }
    }

    public void queueInputs$kotlin_release(@NotNull ChangedInput... inputs) {
        Intrinsics.checkNotNullParameter(inputs, "inputs");
        synchronized (getStartStopLock$kotlin_release()) {
            CollectionsKt.D(getChangedInputs$kotlin_release(), inputs);
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    @Override // app.rive.runtime.kotlin.core.RefCount
    public int release() {
        int release = RefCount.DefaultImpls.release(this);
        if (release >= 0) {
            if (release == 0) {
                if (!isActive()) {
                    setFile(null);
                    return release;
                }
                throw new IllegalArgumentException("Failed requirement.");
            }
            return release;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void removeEventListener(@NotNull RiveEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (getStartStopLock$kotlin_release()) {
            this._eventListeners.remove(listener);
        }
    }

    public void reset$kotlin_release() {
        this.playingAnimationSet.clear();
        this.animationList.clear();
        this.playingStateMachineSet.clear();
        this.stateMachineList.clear();
        getChangedInputs$kotlin_release().clear();
        setActiveArtboard(null);
    }

    @ControllerStateManagement
    public void restoreControllerState(@NotNull ControllerState state) {
        ReentrantLock reentrantLock;
        Intrinsics.checkNotNullParameter(state, "state");
        File file = getFile();
        if (file == null || (reentrantLock = file.getLock()) == null) {
            reentrantLock = this;
        }
        synchronized (reentrantLock) {
            try {
                reset$kotlin_release();
                setFile(state.getFile());
                setActiveArtboard(state.getActiveArtboard());
                for (LinearAnimationInstance linearAnimationInstance : state.getAnimations()) {
                    this.animationList.add(linearAnimationInstance);
                }
                for (StateMachineInstance stateMachineInstance : state.getStateMachines()) {
                    this.stateMachineList.add(stateMachineInstance);
                }
                for (LinearAnimationInstance linearAnimationInstance2 : state.getPlayingAnimations()) {
                    play$kotlin_release(linearAnimationInstance2, linearAnimationInstance2.getLoop(), linearAnimationInstance2.getDirection());
                }
                for (StateMachineInstance stateMachineInstance2 : state.getPlayingStateMachines()) {
                    play$kotlin_release$default(this, stateMachineInstance2, false, 2, null);
                }
                setActive(state.isActive());
                state.dispose();
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @ControllerStateManagement
    public ControllerState saveControllerState() {
        Artboard activeArtboard;
        File file = getFile();
        if (file == null || (activeArtboard = getActiveArtboard()) == null) {
            return null;
        }
        synchronized (file.getLock()) {
            if (!file.getHasCppObject()) {
                return null;
            }
            file.acquire();
            activeArtboard.acquire();
            List<LinearAnimationInstance> animationList = this.animationList;
            Intrinsics.checkNotNullExpressionValue(animationList, "animationList");
            List h12 = CollectionsKt.h1(animationList);
            HashSet f12 = CollectionsKt.f1(getPlayingAnimations());
            List<StateMachineInstance> stateMachineList = this.stateMachineList;
            Intrinsics.checkNotNullExpressionValue(stateMachineList, "stateMachineList");
            return new ControllerState(file, activeArtboard, h12, f12, CollectionsKt.h1(stateMachineList), CollectionsKt.f1(getPlayingStateMachines()), isActive());
        }
    }

    public void selectArtboard(String str) {
        Artboard firstArtboard;
        File file = getFile();
        if (file != null) {
            if (str != null) {
                firstArtboard = file.artboard(str);
            } else {
                firstArtboard = file.getFirstArtboard();
            }
            setArtboard(firstArtboard);
            return;
        }
        Log.w(TAG, "selectArtboard: cannot select an Artboard without a valid File.");
    }

    public void setActive(boolean z10) {
        this.isActive = z10;
    }

    public void setActiveArtboard(Artboard artboard) {
        ReentrantLock reentrantLock;
        if (Intrinsics.areEqual(artboard, this.activeArtboard)) {
            return;
        }
        File file = getFile();
        if (file == null || (reentrantLock = file.getLock()) == null) {
            reentrantLock = this;
        }
        synchronized (reentrantLock) {
            try {
                Artboard artboard2 = this.activeArtboard;
                if (artboard2 != null) {
                    artboard2.release();
                }
                this.activeArtboard = artboard;
                if (artboard != null) {
                    artboard.acquire();
                }
                Float f10 = this.userSetVolume;
                if (f10 != null) {
                    float floatValue = f10.floatValue();
                    Artboard activeArtboard = getActiveArtboard();
                    if (activeArtboard != null) {
                        activeArtboard.setVolume$kotlin_release(floatValue);
                    }
                    Unit unit = Unit.f32008a;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void setAlignment(@NotNull Alignment value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.alignment = value;
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void setAutoplay(boolean z10) {
        this.autoplay = z10;
    }

    public void setBooleanState(@NotNull String stateMachineName, @NotNull String inputName, boolean z10, String str) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        queueInput(stateMachineName, inputName, Boolean.valueOf(z10), str);
    }

    public void setBooleanStateAtPath(@NotNull String inputName, boolean z10, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        queueInput("", inputName, Boolean.valueOf(z10), path);
    }

    public void setFile(File file) {
        Object obj;
        if (Intrinsics.areEqual(file, this.file)) {
            return;
        }
        File file2 = this.file;
        if (file2 == null || (obj = file2.getLock()) == null) {
            obj = this;
        }
        synchronized (obj) {
            try {
                File file3 = this.file;
                if (file3 != null) {
                    reset$kotlin_release();
                    file3.release();
                }
                this.file = file;
                if (file != null) {
                    file.acquire();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void setFit(@NotNull Fit value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.fit = value;
        getRequireArtboardResize$kotlin_release().set(true);
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void setLayoutScaleFactor(Float f10) {
        this.layoutScaleFactor = f10;
        getRequireArtboardResize$kotlin_release().set(true);
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void setLayoutScaleFactorAutomatic$kotlin_release(float f10) {
        this.layoutScaleFactorAutomatic = f10;
        getRequireArtboardResize$kotlin_release().set(true);
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void setLoop(@NotNull Loop loop) {
        Intrinsics.checkNotNullParameter(loop, "<set-?>");
        this.loop = loop;
    }

    public void setNumberState(@NotNull String stateMachineName, @NotNull String inputName, float f10, String str) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        queueInput(stateMachineName, inputName, Float.valueOf(f10), str);
    }

    public void setNumberStateAtPath(@NotNull String inputName, float f10, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        queueInput("", inputName, Float.valueOf(f10), path);
    }

    public void setOnStart(Function0<Unit> function0) {
        this.onStart = function0;
    }

    @Override // app.rive.runtime.kotlin.core.RefCount
    public void setRefs(@NotNull AtomicInteger atomicInteger) {
        Intrinsics.checkNotNullParameter(atomicInteger, "<set-?>");
        this.refs = atomicInteger;
    }

    public void setRequireArtboardResize$kotlin_release(@NotNull AtomicBoolean atomicBoolean) {
        Intrinsics.checkNotNullParameter(atomicBoolean, "<set-?>");
        this.requireArtboardResize = atomicBoolean;
    }

    public void setRiveFile(@NotNull File file, String str) {
        Intrinsics.checkNotNullParameter(file, "file");
        if (Intrinsics.areEqual(file, getFile())) {
            return;
        }
        setFile(file);
        selectArtboard(str);
    }

    public void setTargetBounds(@NotNull RectF rectF) {
        Intrinsics.checkNotNullParameter(rectF, "<set-?>");
        this.targetBounds = rectF;
    }

    public void setTextRunValue(@NotNull String textRunName, @NotNull String textValue) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            activeArtboard.setTextRunValue(textRunName, textValue);
        }
        for (StateMachineInstance stateMachineInstance : getStateMachines()) {
            play$kotlin_release(stateMachineInstance, false);
        }
    }

    public void setVolume(float f10) {
        this.userSetVolume = Float.valueOf(f10);
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard == null) {
            return;
        }
        activeArtboard.setVolume$kotlin_release(f10);
    }

    public void setupScene$kotlin_release(@NotNull RiveAnimationView.RendererAttributes rendererAttributes) {
        Artboard firstArtboard;
        Intrinsics.checkNotNullParameter(rendererAttributes, "rendererAttributes");
        File file = getFile();
        if (file == null) {
            Log.w(TAG, "Cannot init without a file");
            return;
        }
        reset$kotlin_release();
        setAutoplay(rendererAttributes.getAutoplay());
        setAlignment(rendererAttributes.getAlignment());
        setFit(rendererAttributes.getFit());
        setLoop(rendererAttributes.getLoop());
        String artboardName = rendererAttributes.getArtboardName();
        if (artboardName != null) {
            firstArtboard = file.artboard(artboardName);
        } else {
            firstArtboard = file.getFirstArtboard();
        }
        setActiveArtboard(firstArtboard);
        if (rendererAttributes.getAutoBind() && getActiveArtboard() != null) {
            Artboard activeArtboard = getActiveArtboard();
            Intrinsics.checkNotNull(activeArtboard);
            ViewModelInstance createDefaultInstance = file.defaultViewModelForArtboard(activeArtboard).createDefaultInstance();
            activeArtboard.setViewModelInstance(createDefaultInstance);
            String stateMachineName = rendererAttributes.getStateMachineName();
            if (stateMachineName == null) {
                stateMachineName = (String) CollectionsKt.firstOrNull(activeArtboard.getStateMachineNames());
            }
            if (stateMachineName != null) {
                getOrCreateStateMachines(stateMachineName);
            }
            for (StateMachineInstance stateMachineInstance : getStateMachines()) {
                stateMachineInstance.setViewModelInstance(createDefaultInstance);
            }
        }
        if (getAutoplay()) {
            String animationName = rendererAttributes.getAnimationName();
            String stateMachineName2 = rendererAttributes.getStateMachineName();
            if (animationName != null) {
                play$default(this, animationName, (Loop) null, (Direction) null, false, false, 30, (Object) null);
                return;
            } else if (stateMachineName2 != null) {
                play$default(this, stateMachineName2, (Loop) null, (Direction) null, true, true, 6, (Object) null);
                return;
            } else {
                play$default(this, null, null, true, 3, null);
                return;
            }
        }
        Artboard activeArtboard2 = getActiveArtboard();
        if (activeArtboard2 != null) {
            activeArtboard2.advance(0.0f);
        }
        synchronized (getStartStopLock$kotlin_release()) {
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
    }

    public void stopAnimations() {
        List<LinearAnimationInstance> animationList = this.animationList;
        Intrinsics.checkNotNullExpressionValue(animationList, "animationList");
        if (!animationList.isEmpty()) {
            for (LinearAnimationInstance linearAnimationInstance : getAnimations()) {
                stop(linearAnimationInstance);
            }
        }
        List<StateMachineInstance> stateMachineList = this.stateMachineList;
        Intrinsics.checkNotNullExpressionValue(stateMachineList, "stateMachineList");
        if (stateMachineList.isEmpty()) {
            return;
        }
        for (StateMachineInstance stateMachineInstance : getStateMachines()) {
            stop(stateMachineInstance);
        }
    }

    public RiveFileController(@NotNull Loop loop, boolean z10, File file, Artboard artboard, Function0<Unit> function0, @NotNull ConcurrentLinkedQueue<ChangedInput> changedInputs) {
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(changedInputs, "changedInputs");
        this.loop = loop;
        this.autoplay = z10;
        this.onStart = function0;
        this.changedInputs = changedInputs;
        this.refs = new AtomicInteger(1);
        this.requireArtboardResize = new AtomicBoolean(false);
        this.fit = Fit.CONTAIN;
        this.alignment = Alignment.CENTER;
        this.layoutScaleFactorAutomatic = 1.0f;
        this.file = file;
        this.activeArtboard = artboard;
        this.animationList = Collections.synchronizedList(new ArrayList());
        this.stateMachineList = Collections.synchronizedList(new ArrayList());
        this.playingAnimationSet = Collections.synchronizedSet(new HashSet());
        this.playingStateMachineSet = Collections.synchronizedSet(new HashSet());
        this.startStopLock = new ReentrantLock();
        this.targetBounds = new RectF();
        Set<Listener> synchronizedSet = Collections.synchronizedSet(new HashSet());
        Intrinsics.checkNotNullExpressionValue(synchronizedSet, "synchronizedSet(...)");
        this._listeners = synchronizedSet;
        Set<RiveEventListener> synchronizedSet2 = Collections.synchronizedSet(new HashSet());
        Intrinsics.checkNotNullExpressionValue(synchronizedSet2, "synchronizedSet(...)");
        this._eventListeners = synchronizedSet2;
    }

    private List<LinearAnimationInstance> animations(Collection<String> collection) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : getAnimations()) {
            if (collection.contains(((LinearAnimationInstance) obj).getName())) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    public static /* synthetic */ void pause$default(RiveFileController riveFileController, String str, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: pause");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveFileController.pause(str, z10);
    }

    private List<StateMachineInstance> stateMachines(Collection<String> collection) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : getStateMachines()) {
            if (collection.contains(((StateMachineInstance) obj).getName())) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    public static /* synthetic */ void stopAnimations$default(RiveFileController riveFileController, String str, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: stopAnimations");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveFileController.stopAnimations(str, z10);
    }

    public String getTextRunValue(@NotNull String textRunName, @NotNull String path) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(path, "path");
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            return activeArtboard.getTextRunValue(textRunName, path);
        }
        return null;
    }

    @Override // app.rive.runtime.kotlin.Observable
    public void registerListener(@NotNull Listener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (getStartStopLock$kotlin_release()) {
            this._listeners.add(listener);
        }
    }

    @Override // app.rive.runtime.kotlin.Observable
    public void unregisterListener(@NotNull Listener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        synchronized (getStartStopLock$kotlin_release()) {
            this._listeners.remove(listener);
        }
    }

    public static /* synthetic */ void play$default(RiveFileController riveFileController, String str, Loop loop, Direction direction, boolean z10, boolean z11, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 2) != 0) {
            loop = Loop.AUTO;
        }
        Loop loop2 = loop;
        if ((i10 & 4) != 0) {
            direction = Direction.AUTO;
        }
        Direction direction2 = direction;
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        boolean z12 = z10;
        if ((i10 & 16) != 0) {
            z11 = true;
        }
        riveFileController.play(str, loop2, direction2, z12, z11);
    }

    private void stop(StateMachineInstance stateMachineInstance) {
        this.playingStateMachineSet.remove(stateMachineInstance);
        if (this.stateMachineList.remove(stateMachineInstance)) {
            notifyStop(stateMachineInstance);
        }
    }

    public void play(@NotNull String animationName, @NotNull Loop loop, @NotNull Direction direction, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        playAnimation(animationName, loop, direction, z10, z11);
    }

    public void play(@NotNull Loop loop, @NotNull Direction direction, boolean z10) {
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            if (getPausedAnimations().isEmpty() && getPausedStateMachines().isEmpty()) {
                List<String> animationNames = activeArtboard.getAnimationNames();
                if (!animationNames.isEmpty()) {
                    playAnimation$default(this, (String) CollectionsKt.o0(animationNames), loop, direction, false, false, 24, null);
                }
                List<String> stateMachineNames = activeArtboard.getStateMachineNames();
                if (stateMachineNames.isEmpty()) {
                    return;
                }
                playAnimation((String) CollectionsKt.o0(stateMachineNames), loop, direction, true, z10);
                return;
            }
            for (LinearAnimationInstance linearAnimationInstance : getAnimations()) {
                play$kotlin_release(linearAnimationInstance, loop, direction);
            }
            for (StateMachineInstance stateMachineInstance : getStateMachines()) {
                play$kotlin_release(stateMachineInstance, z10);
            }
        }
    }

    public void setTextRunValue(@NotNull String textRunName, @NotNull String textValue, @NotNull String path) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        Intrinsics.checkNotNullParameter(path, "path");
        Artboard activeArtboard = getActiveArtboard();
        if (activeArtboard != null) {
            activeArtboard.setTextRunValue(textRunName, textValue, path);
        }
        for (StateMachineInstance stateMachineInstance : getStateMachines()) {
            play$kotlin_release(stateMachineInstance, false);
        }
    }

    public static /* synthetic */ void play$default(RiveFileController riveFileController, Loop loop, Direction direction, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 1) != 0) {
            loop = Loop.AUTO;
        }
        if ((i10 & 2) != 0) {
            direction = Direction.AUTO;
        }
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        riveFileController.play(loop, direction, z10);
    }

    public void pause(@NotNull List<String> animationNames, boolean z10) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        if (z10) {
            for (StateMachineInstance stateMachineInstance : stateMachines(animationNames)) {
                pause(stateMachineInstance);
            }
            return;
        }
        for (LinearAnimationInstance linearAnimationInstance : animations(animationNames)) {
            pause(linearAnimationInstance);
        }
    }

    public void stopAnimations(@NotNull List<String> animationNames, boolean z10) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        if (z10) {
            for (StateMachineInstance stateMachineInstance : stateMachines(animationNames)) {
                stop(stateMachineInstance);
            }
            return;
        }
        for (LinearAnimationInstance linearAnimationInstance : animations(animationNames)) {
            stop(linearAnimationInstance);
        }
    }

    public void play$kotlin_release(@NotNull LinearAnimationInstance animationInstance, @NotNull Loop loop, @NotNull Direction direction) {
        Intrinsics.checkNotNullParameter(animationInstance, "animationInstance");
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        Loop loop2 = Loop.AUTO;
        if (loop == loop2) {
            loop = getLoop();
        }
        if (loop != loop2) {
            animationInstance.setLoop(loop);
        }
        if (!this.animationList.contains(animationInstance)) {
            if (direction == Direction.BACKWARDS) {
                animationInstance.time(animationInstance.getEndTime());
            }
            this.animationList.add(animationInstance);
        }
        if (direction != Direction.AUTO) {
            animationInstance.setDirection(direction);
        }
        synchronized (getStartStopLock$kotlin_release()) {
            this.playingAnimationSet.add(animationInstance);
            Function0<Unit> onStart = getOnStart();
            if (onStart != null) {
                onStart.invoke();
                Unit unit = Unit.f32008a;
            }
        }
        notifyPlay(animationInstance);
    }

    public void pause(@NotNull String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        if (z10) {
            for (StateMachineInstance stateMachineInstance : stateMachines(animationName)) {
                pause(stateMachineInstance);
            }
            return;
        }
        for (LinearAnimationInstance linearAnimationInstance : animations(animationName)) {
            pause(linearAnimationInstance);
        }
    }

    public void stopAnimations(@NotNull String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        if (z10) {
            for (StateMachineInstance stateMachineInstance : stateMachines(animationName)) {
                stop(stateMachineInstance);
            }
            return;
        }
        for (LinearAnimationInstance linearAnimationInstance : animations(animationName)) {
            stop(linearAnimationInstance);
        }
    }

    private void pause(LinearAnimationInstance linearAnimationInstance) {
        if (this.playingAnimationSet.remove(linearAnimationInstance)) {
            notifyPause(linearAnimationInstance);
        }
    }

    private void pause(StateMachineInstance stateMachineInstance) {
        if (this.playingStateMachineSet.remove(stateMachineInstance)) {
            notifyPause(stateMachineInstance);
        }
    }

    public /* synthetic */ RiveFileController(Loop loop, boolean z10, File file, Artboard artboard, Function0 function0, ConcurrentLinkedQueue concurrentLinkedQueue, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? Loop.AUTO : loop, (i10 & 2) != 0 ? true : z10, (i10 & 4) != 0 ? null : file, (i10 & 8) != 0 ? null : artboard, (i10 & 16) != 0 ? null : function0, (i10 & 32) != 0 ? new ConcurrentLinkedQueue() : concurrentLinkedQueue);
    }

    public /* synthetic */ RiveFileController(Loop loop, boolean z10, File file, Artboard artboard, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        Function0 function02;
        Artboard artboard2;
        boolean z11;
        File file2;
        RiveFileController riveFileController;
        Loop loop2;
        loop = (i10 & 1) != 0 ? Loop.AUTO : loop;
        z10 = (i10 & 2) != 0 ? true : z10;
        file = (i10 & 4) != 0 ? null : file;
        artboard = (i10 & 8) != 0 ? null : artboard;
        if ((i10 & 16) != 0) {
            function02 = null;
            file2 = file;
            artboard2 = artboard;
            loop2 = loop;
            z11 = z10;
            riveFileController = this;
        } else {
            function02 = function0;
            artboard2 = artboard;
            z11 = z10;
            file2 = file;
            riveFileController = this;
            loop2 = loop;
        }
        new RiveFileController(loop2, z11, file2, artboard2, function02);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RiveFileController(@NotNull Loop loop, boolean z10, File file, Artboard artboard, Function0<Unit> function0) {
        this(loop, z10, file, artboard, function0, new ConcurrentLinkedQueue());
        Intrinsics.checkNotNullParameter(loop, "loop");
    }
}
